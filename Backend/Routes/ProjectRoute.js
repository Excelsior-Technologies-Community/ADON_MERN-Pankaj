import express from "express";

import { createProject, deleteProject, getProjects, getProjectsBySlug, updateProject } from "../Controllers/ProjectController.js";
import { protect } from "../Middleware/authMiddlware.js";
import { adminOnly } from "../Middleware/adminMiddleware.js";

const ProjectRouter = express.Router();

ProjectRouter.get("/", getProjects);
ProjectRouter.post("/", protect, adminOnly, createProject);
ProjectRouter.get("/:slug", getProjectsBySlug)
ProjectRouter.delete("/:id", protect, deleteProject)
ProjectRouter.put("/:id", protect, updateProject)

export default ProjectRouter;
