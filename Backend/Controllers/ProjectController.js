import db from "../Config/db.js";



export const getProjects = async (req, res) => {
    const query = "SELECT * FROM projects";

    db.query(query, (err, result) => {

        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message,
            })
        }

        res.status(200).json({
            success: true,
            count: result.length,
            data: result
        })
    })
};

export const getProjectsBySlug = (req, res) => {

    const { slug } = req.params;

    const projectQuery = " SELECT * FROM projects WHERE slug = ? ";

    db.query(projectQuery, [slug], (err, projectResult) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: err.message
            })
        }

        if (projectResult.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Project Not Found",
            })
        }

        const project = projectResult[0];

        const serviceQuery = "SELECT service_name FROM services WHERE project_id = ? ";

        db.query(serviceQuery, [project.id], (err, serviceResult) => {
            if (err) {
                return res.status(500).json({
                    success: false,
                    message: err.message
                })
            }

            const galleryQuery = "SELECT image_url FROM gallery WHERE project_id = ? ";

            db.query(galleryQuery, [project.id], (err, galleryResult) => {
                if (err) {
                    return res.status(500).json({
                        success: false,
                        message: err.message
                    });
                }

                res.status(200).json({
                    success: true,
                    project,
                    services: serviceResult,
                    gallery: galleryResult

                })
            })
        })
    })
}