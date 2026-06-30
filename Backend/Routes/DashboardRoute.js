import express from "express";
import { getDashBoard } from "../Controllers/DashboardController.js";

const DashRouter = express.Router();

DashRouter.get("/dashdata", getDashBoard);

export default DashRouter;