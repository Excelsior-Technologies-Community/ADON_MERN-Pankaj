import db from "../Config/db.js";



export const getProjects = async (req, res) => {
    try {
        const [projects] = await db.promise().query("SELECT * FROM projects");

        res.status(200).json({
            success: true,
            count: projects.length,
            data: projects,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};



export const getProjectsBySlug = async (req, res) => {
    try {


        const { slug } = req.params;

        const projectQuery = " SELECT * FROM projects WHERE slug = ? ";

        const [projectResult] = await db.promise().query(projectQuery, [slug]);

        if (!projectResult.length) {
            return res.status(404).json({
                success: false,
                message: "Project Not Found"
            })
        }

        const project = projectResult[0];

        const serviceQuery = "SELECT service_name FROM services WHERE project_id = ? ";

        const [serviceResult] = await db.promise().query(serviceQuery, [project.id]);

        const galleryQuery = "SELECT image_url FROM gallery WHERE project_id = ? ";

        const [galleryResult] = await db.promise().query(galleryQuery, [project.id]);


        res.status(200).json({
            success: true,
            project,
            services: serviceResult,
            gallery: galleryResult

        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};



export const createProject = async (req, res) => {
    try {

        const {
            slug,
            title,
            category,
            client,
            year,
            duration,
            description,
            challenge,
            solution,
            traffic,
            conversions,
            engagement,
            services
        } = req.body;

        // Cloudinary URLs

        const heroImage =
            req.files?.heroImage?.[0]?.path || null;

        const galleryImages =
            req.files?.gallery?.map(
                (file) => file.path
            ) || [];

        // Create Project

        const [result] =
            await db.promise().query(
                `
        INSERT INTO projects(
          slug,
          title,
          category,
          client,
          year,
          duration,
          description,
          challenge,
          solution,
          heroImage,
          traffic,
          conversions,
          engagement
        )
        VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)
        `,
                [
                    slug,
                    title,
                    category,
                    client,
                    year,
                    duration,
                    description,
                    challenge,
                    solution,
                    heroImage,
                    traffic,
                    conversions,
                    engagement,
                ]
            );

        const projectId = result.insertId;

        // Services

        if (services) {

            const serviceArray =
                services
                    .split(",")
                    .map((item) => item.trim());

            const serviceValues =
                serviceArray.map(
                    (service) => [
                        projectId,
                        service
                    ]
                );

            await db.promise().query(
                `
        INSERT INTO services
        (project_id, service_name)
        VALUES ?
        `,
                [serviceValues]
            );
        }

        // Gallery

        if (galleryImages.length > 0) {

            const galleryValues =
                galleryImages.map(
                    (image) => [
                        projectId,
                        image
                    ]
                );

            await db.promise().query(
                `
        INSERT INTO gallery
        (project_id, image_url)
        VALUES ?
        `,
                [galleryValues]
            );
        }

        res.status(201).json({
            success: true,
            message: "Project Created Successfully",
            projectId,
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

export const deleteProject = async (req, res) => {
    try {
        const { id } = req.params;

        const [project] = await db.promise().query("SELECT * FROM projects WHERE id = ?", [id]);

        if (!project.length) {
            return res.status(404).json({
                success: false,
                message: "project not found "
            })
        }



        await db.promise().query(`DELETE FROM services WHERE id=? `, [id]);
        await db.promise().query("DELETE FROM gallery WHERE id = ?  ", [id]);
        await db.promise().query("DELETE FROM projects WHERE id = ? ", [id])

        res.status(200).json({
            success: true,
            message: "project deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })

    }
}

export const updateProject = async (req, res) => {

    try {
        const { id } = req.params;

        // Existing project
        const [projectData] = await db.promise().query("SELECT * FROM projects WHERE id = ?", [id]);

        if (!projectData.length) {
            return res.status(404).json({
                success: false,
                message: "Project not found "
            })
        }

        const oldProject = projectData[0];

        const {
            slug,
            title,
            category,
            client,
            year,
            duration,
            description,
            challenge,
            solution,
            traffic,
            conversions,
            engagement,
            services,
        } = req.body;

        const heroImage = req.files?.heroImage?.[0]?.path || oldProject.heroImage


        await db.promise().query(`UPDATE projects SET 
          slug= ? ,
          title= ?,
          category=?,
          client=? ,
          year=? ,
          duration=? ,
          description=?,
          challenge=?,
          solution=?,
          heroImage=?,
          traffic=?,
          conversions=?,
          engagement=?
          WHERE id =? ` , [
            slug || oldProject.slug,
            title || oldProject.title,
            category || oldProject.category,
            client || oldProject.client,
            year || oldProject.year,
            duration || oldProject.duration,
            description || oldProject.description,
            challenge || oldProject.challenge,
            solution || oldProject.solution,
            heroImage,
            traffic || oldProject.traffic,
            conversions || oldProject.conversions,
            engagement || oldProject.engagement,
            id,
        ]);



        // Update Services
        if (services) {
            await db.promise().query(
                "DELETE FROM services WHERE project_id = ?",
                [id]
            );
            const serviceArray = services.split(",").map(item => item.trim());

            const serviceValues = serviceArray.map(service => [id, service])

            if (serviceValues.length > 0) {
                await db.promise().query(
                    `INSERT INTO services ( project_id , service_name) VALUES ? `, [serviceValues]
                )
            }
        }

        // gallery update 

        if (req.files?.gallery && req.files.gallery.length > 0) {
            await db.promise().query("DELETE FROM gallery WHERE project_id = ?", [id]);

            const galleryValues = req.files.gallery.map(file => [id, file.path]);

            await db.promise().query(
                `INSERT INTO gallery ( project_id ,image_url ) VALUES ? `, [galleryValues]
            )

        }

        res.status(200).json({
            success: true,
            message: "PRoject updated succefully"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};


export const importProjects = async (req, res) => {
    try {
        const { projects } = req.body;

        if (!projects || projects.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No Projects Found",
            });
        }

        for (const project of projects) {
            // Insert Project
            const [result] = await db.promise().query(
                `INSERT INTO projects
        (
          slug,
          title,
          category,
          client,
          year,
          duration,
          description,
          challenge,
          solution,
          heroImage,
          traffic,
          conversions,
          engagement
        )
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`,
                [
                    project.slug,
                    project.title,
                    project.category,
                    project.client,
                    project.year,
                    project.duration,
                    project.description,
                    project.challenge,
                    project.solution,
                    project.heroImage,
                    project.results.traffic,
                    project.results.conversions,
                    project.results.engagement,
                ]
            );

            const projectId = result.insertId;

            // Insert Services
            if (project.services?.length > 0) {
                const serviceValues = project.services.map((service) => [
                    projectId,
                    service,
                ]);

                await db.promise().query(
                    `INSERT INTO services
          (project_id, service_name)
          VALUES ?`,
                    [serviceValues]
                );
            }

            // Insert Gallery
            if (project.gallery?.length > 0) {
                const galleryValues = project.gallery.map((image) => [
                    projectId,
                    image,
                ]);

                await db.promise().query(
                    `INSERT INTO gallery
          (project_id, image_url)
          VALUES ?`,
                    [galleryValues]
                );
            }
        }

        res.status(201).json({
            success: true,
            message: `${projects.length} Projects Imported Successfully`,
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};