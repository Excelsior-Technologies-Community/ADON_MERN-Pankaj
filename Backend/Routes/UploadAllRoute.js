import express from "express";
import upload from "../Middleware/uploadMiddleware.js"

const router = express.Router();

router.post(
    "/upload-images",

    upload.array("images", 100),
    (req, res) => {
        try {
            const images = req.files.map((file) => ({
                url: file.path,
                public_id: file.filename,
            }));

            res.status(200).json({
                success: true,
                count: images.length,
                images,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
);

export default router;