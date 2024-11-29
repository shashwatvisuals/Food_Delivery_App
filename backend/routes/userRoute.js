import express from 'express';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
import { loginUser,registerUser } from '../controllers/userController.js';

const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)

export default userRouter;