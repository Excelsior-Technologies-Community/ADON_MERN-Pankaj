import cloudinary from "../Config/cloudinary.js";
import db from "../Config/db.js"

export const getAbout = async (req, res) => {
    try {
        const [[about]] = await db.promise().query("SELECT * FROM about LIMIT 1");

        res.status(200).json({
            success: true,
            about,
        })
    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
}


export const updateAbout = async (req, res) => {
    try {
        const {
            hero_title,
            hero_description,
            about_title,
            about_description,
            mission,
            vision,
            experience,
            projects_completed,
            happy_clients,
            team_members,
        } = req.body;

        const [[about]] = await db.promise().query(
            "SELECT * FROM about LIMIT 1"
        );
        let heroImage = about.hero_image;
        let aboutImage = about.about_image;

        // Hero Image
        if (req.files?.heroImage) {
            if (heroImage) {
                const publicId = heroImage
                    .split("/")
                    .slice(-2)
                    .join("/")
                    .split(".")[0];

                await cloudinary.uploader.destroy(publicId);
            }

            heroImage = req.files.heroImage[0].path;
        }

        // About Image
        if (req.files?.aboutImage) {
            if (aboutImage) {
                const publicId = aboutImage
                    .split("/")
                    .slice(-2)
                    .join("/")
                    .split(".")[0];

                await cloudinary.uploader.destroy(publicId);
            }

            aboutImage = req.files.aboutImage[0].path;
        }


        await db.promise().query(
            `
      UPDATE about
      SET
      hero_title=?,
      hero_description=?,
      about_title=?,
      about_description=?,
      mission=?,
      vision=?,
      experience=?,
      projects_completed=?,
      happy_clients=?,
      team_members=?,
      hero_image=?,
      about_image=?
      WHERE id=?
      `,
            [
                hero_title,
                hero_description,
                about_title,
                about_description,
                mission,
                vision,
                experience,
                projects_completed,
                happy_clients,
                team_members,
                heroImage,
                aboutImage,
                about.id,
            ]
        );
        res.status(200).json({
            success: true,
            message: "About page updated successfully",
        });


    } catch (error) {
        console.log(error);

        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}