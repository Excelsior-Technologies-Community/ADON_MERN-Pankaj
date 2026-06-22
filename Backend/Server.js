import express from "express";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();
import db from "./Config/db.js";
import ProjectRouter from "./Routes/ProjectRoute.js";
import UserRouter from "./Routes/AuthRoute.js";
import uploadRouter from "./Routes/uploadRoute.js"
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/projects", ProjectRouter)
app.use("/api/user", UserRouter)

app.use("/api", uploadRouter)
app.use((err, req, res, next) => {
    console.log("ERROR =>", err);

    res.status(500).json({
        success: false,
        message: err.message,
    });
});
console.log(
    process.env.CLOUDINARY_CLOUD_NAME
);

console.log(
    process.env.CLOUDINARY_API_KEY
);

console.log(
    process.env.CLOUDINARY_API_SECRET
);

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