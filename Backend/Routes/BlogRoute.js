import express from "express";
import { createBlog, deleteBlog, getBlogById, getBlogs, updateBlog } from "../Controllers/BlogController.js";
import upload from "../Middleware/uploadMiddleware.js"

const BlogRouter = express.Router();

BlogRouter.get("/", getBlogs);
BlogRouter.get("/:id", getBlogById);

BlogRouter.post("/", upload.fields([
    {
        name: "image",
        maxCount: 1,
    },
]), createBlog);

BlogRouter.put("/:id", upload.fields([
    {
        name: "image",
        maxCount: 1,
    },
]), updateBlog);

BlogRouter.delete("/:id", deleteBlog);

export default BlogRouter;