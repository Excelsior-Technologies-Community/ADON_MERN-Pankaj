import express from "express";

import { createProject, deleteProject, getProjects, getProjectsBySlug, updateProject } from "../Controllers/ProjectController.js";
import { protect } from "../Middleware/authMiddlware.js";
import { adminOnly } from "../Middleware/adminMiddleware.js";
import upload from "../Middleware/uploadMiddleware.js";

const ProjectRouter = express.Router();

ProjectRouter.get("/", getProjects);
ProjectRouter.post(
    "/",
    upload.fields([
        {
            name: "heroImage",
            maxCount: 1,
        },
        {
            name: "gallery",
            maxCount: 10,
        },
    ]), protect, adminOnly,
    createProject
);
ProjectRouter.get("/:slug", getProjectsBySlug)
ProjectRouter.delete("/:id", protect, deleteProject)
ProjectRouter.put("/:id", protect, updateProject)

export default ProjectRouter;
