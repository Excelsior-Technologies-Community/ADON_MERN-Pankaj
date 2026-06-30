import express from "express";
import { getAbout, updateAbout } from "../Controllers/AboutController.js";
import upload from "../Middleware/uploadMiddleware.js";

const AboutRouter = express.Router();

AboutRouter.get("/", getAbout);

AboutRouter.put(
    "/",
    // protect,
    // adminOnly,
    upload.fields([
        {
            name: "heroImage",
            maxCount: 1,
        },
        {
            name: "aboutImage",
            maxCount: 1,
        },
    ]),
    updateAbout
);


export default AboutRouter;