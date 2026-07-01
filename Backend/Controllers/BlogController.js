import db from "../Config/db.js";

export const createBlog = async (req, res) => {
    try {
        const { title, description, category } = req.body;

        const img = req.files?.image?.[0]?.path || "";


        if (!title || !description || !category || !img) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields",
            });
        }

        await db.promise().query(
            `INSERT INTO blog (title, description ,category ,image) VALUES (?,?,?,?)`, [title, description, category, img]
        );

        res.status(201).json({
            success: true,
            message: "blog created successfully"
        })

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

export const getBlogs = async (req, res) => {
    try {
        const [blogs] = await db.promise().query("SELECT * FROM blog ORDER BY created_at DESC");

        res.status(200).json({
            success: true,
            data: blogs,
        })
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}

export const getBlogById = async (req, res) => {
    try {
        const { id } = req.params;

        const [[blog]] = await db.promise().query("SELECT * FROM blog WHERE id = ? ", [id]);

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }
        res.status(200).json({
            success: true,
            blog,
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}


import cloudinary from "../Config/cloudinary.js";

export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const [[blog]] = await db.promise().query(
            "SELECT * FROM blog WHERE id = ?",
            [id]
        );

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }

        if (blog.image) {
            const publicId = blog.image
                .split("/")
                .slice(-2)
                .join("/")
                .split(".")[0];

            await cloudinary.uploader.destroy(publicId);
        }

        await db.promise().query(
            "DELETE FROM blog WHERE id = ?",
            [id]
        );

        res.status(200).json({
            success: true,
            message: "Blog deleted successfully",
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const {
            title,
            description,
            category,
        } = req.body;

        const [[blog]] = await db.promise().query(
            "SELECT * FROM blog WHERE id = ?",
            [id]
        );

        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog not found",
            });
        }

        let image = blog.image;

        if (req.files?.image) {
            if (image) {
                const publicId = image
                    .split("/")
                    .slice(-2)
                    .join("/")
                    .split(".")[0];

                await cloudinary.uploader.destroy(publicId);
            }

            image = req.files.image[0].path;
        }

        await db.promise().query(
            `
      UPDATE blog
      SET
      title = ?,
      description = ?,
      category = ?,
      image = ?
      WHERE id = ?
      `,
            [
                title,
                description,
                category,
                image,
                id,
            ]
        );

        res.status(200).json({
            success: true,
            message: "Blog updated successfully",
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
