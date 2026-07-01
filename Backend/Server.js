import express from "express";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
import db from "./Config/db.js";
import ProjectRouter from "./Routes/ProjectRoute.js";
import UserRouter from "./Routes/AuthRoute.js";
import uploadRouter from "./Routes/uploadRoute.js"
import uploadImg from "./Routes/UploadAllRoute.js"
import DashRouter from "./Routes/DashboardRoute.js";
import MessageRouter from "./Routes/MessageRoute.js";
import AboutRouter from "./Routes/AboutRoute.js";
import BlogRouter from "./Routes/BlogRoute.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

app.use("/api/projects", ProjectRouter)
app.use("/api/user", UserRouter)
app.use("/api/upload", uploadImg)

app.use("/api", uploadRouter)
app.use("/api", DashRouter)
app.use("/api/msg", MessageRouter)
app.use("/api/about", AboutRouter);
app.use("/api/blog", BlogRouter)

app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    });
});

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "api is ready"
    })
})


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is runnig on ${PORT}`)
})