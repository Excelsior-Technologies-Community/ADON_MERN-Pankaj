import express from "express";
import upload from "../Middleware/uploadMiddleware.js"

const router = express.Router();
router.post(
    "/test-upload",
    upload.single("image"),
    (req, res) => {

        console.log(req.file);

        res.json({
            success: true,
            file: req.file,
        });

    }
);
export default router;