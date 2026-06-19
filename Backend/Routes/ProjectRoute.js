import express from "express";

import { createProject, deleteProject, getProjects, getProjectsBySlug, updateProject } from "../Controllers/ProjectController.js";

const ProjectRouter = express.Router();

ProjectRouter.get("/", getProjects);
ProjectRouter.post("/", createProject);
ProjectRouter.get("/:slug", getProjectsBySlug)
ProjectRouter.delete("/:id", deleteProject)
ProjectRouter.put("/:id", updateProject)

export default ProjectRouter;