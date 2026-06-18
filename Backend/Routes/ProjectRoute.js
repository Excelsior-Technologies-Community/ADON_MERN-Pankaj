import express from "express";

import { getProjects, getProjectsBySlug } from "../Controllers/ProjectController.js";

const ProjectRouter = express.Router();

ProjectRouter.get("/", getProjects);
ProjectRouter.get("/:slug", getProjectsBySlug)

export default ProjectRouter;