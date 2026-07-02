import cloudinary from "../Config/cloudinary.js";
import db from "../Config/db.js";

export const createMember = async (req, res) => {
    try {
        const { name, role, bio } = req.body;

        const image = req?.files?.image?.[0]?.path || "";

        if (!name || !role || !bio || !image) {
            return res.status(400).json({
                success: false,
                message: "pls fill all fields"
            })
        }

        await db.promise().query("INSERT INTO TEAM ( name ,role ,bio, image ) VALUES (? ,? ,? ,?)", [name, role, bio, image]);

        res.status(201).json({
            success: true,
            message: "member is successfully added"
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getMember = async (req, res) => {
    try {
        const [members] = await db.promise().query("SELECT * FROM team ORDER BY created_at DESC");

        res.status(200).json({
            success: true,
            data: members,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

export const getMemberByid = async (req, res) => {
    try {
        const { id } = req.params;
        const [[member]] = await db.promise().query("SELECT * FROM team WHERE id = ?", [id]);

        if (!member) {
            return res.status(404).json({
                success: false,
                message: "Team member not found",
            });
        }

        res.status(200).json({
            success: true,
            member,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

export const updateMember = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, role, bio } = req.body;

        const [[member]] = await db.promise().query("SELECT * FROM team WHERE id = ?", [id]);

        if (!member) {
            return res.status(404).json({
                success: false,
                message: "Team member not found",
            });
        }

        let image = member.image;

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

        await db.promise().query(`UPDATE team SET name= ?, role = ?,bio = ?,image = ? WHERE id =?`, [name, role, bio, image, id])
        res.status(200).json({
            success: true,
            message: "Team member updated successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const deleteTeamMember = async (req, res) => {
    try {
        const { id } = req.params;

        const [[member]] = await db.promise().query(
            "SELECT * FROM team WHERE id = ?",
            [id]
        );

        if (!member) {
            return res.status(404).json({
                success: false,
                message: "Team member not found",
            });
        }

        if (member.image) {
            const publicId = member.image
                .split("/")
                .slice(-2)
                .join("/")
                .split(".")[0];

            await cloudinary.uploader.destroy(publicId);
        }

        await db.promise().query(
            "DELETE FROM team WHERE id = ?",
            [id]
        );

        res.status(200).json({
            success: true,
            message: "Team member deleted successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
