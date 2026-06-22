import express from 'express';
import { loginUser, register } from '../Controllers/authController.js';


const UserRouter = express.Router();
UserRouter.post("/register", register);
UserRouter.post("/login", loginUser);

export default UserRouter;