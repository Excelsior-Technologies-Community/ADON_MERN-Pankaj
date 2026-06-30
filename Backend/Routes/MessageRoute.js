import express from "express";
import { createMessage, deleteMessage, getMessage, getMessageBYId, marksAsRead } from "../Controllers/MesaageController.js";

const MessageRouter = express.Router();

MessageRouter.post("/", createMessage);
MessageRouter.get("/", getMessage);
MessageRouter.get("/:id", getMessageBYId);
MessageRouter.delete("/:id", deleteMessage);
MessageRouter.put("/read/:id", marksAsRead);

export default MessageRouter;
