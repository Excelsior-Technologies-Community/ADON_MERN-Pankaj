import express from "express";
import upload from "../Middleware/uploadMiddleware.js"

const router = express.Router();
router.post(
    "/test-upload",
    upload.single("image"),
    (req, res) => {
        try {
            console.log("FILE =>", req.file);

            return res.json({
                success: true,
                file: req.file,
            });

        } catch (error) {
            console.log("ROUTE ERROR =>", error);

            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
);
export default router;