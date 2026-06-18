import express from "express";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
import db from "./Config/db.js";
import ProjectRouter from "./Routes/ProjectRoute.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/projects", ProjectRouter)

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