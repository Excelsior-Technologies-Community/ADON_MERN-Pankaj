import express from "express";

import { createProject, deleteProject, getProjectId, getProjects, getProjectsBySlug, importProjects, updateProject } from "../Controllers/ProjectController.js";
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
ProjectRouter.get("/id/:id", getProjectId)
ProjectRouter.get("/:slug", getProjectsBySlug)
ProjectRouter.delete("/:id", protect, deleteProject)
ProjectRouter.put("/:id", protect, adminOnly, upload.fields([
    { name: "heroImage", maxCount: 1 }, { name: "gallery", maxCount: 10 },

]), updateProject)
ProjectRouter.post("/import", importProjects);

export default ProjectRouter;

