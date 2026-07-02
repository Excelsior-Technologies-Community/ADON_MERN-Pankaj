import express from "express";
import { createMember, deleteTeamMember, getMember, getMemberByid, updateMember } from "../Controllers/TeamController.js";
import upload from "../Middleware/uploadMiddleware.js";

const TeamRouter = express.Router();

TeamRouter.get("/", getMember);
TeamRouter.get("/:id", getMemberByid);
TeamRouter.post("/", upload.fields([
    {
        name: "image",
        maxCount: 1,
    },
]), createMember);
TeamRouter.put("/:id", upload.fields([
    {
        name: "image",
        maxCount: 1,
    },
]), updateMember);
TeamRouter.delete("/:id", deleteTeamMember)


export default TeamRouter;