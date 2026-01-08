import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User } from './db.js';
import zod from 'zod';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
const signupBodySchema = zod.object({
    username: zod.email(),
    password: zod.string().min(6)
});
const signinBodySchema = zod.object({
    username: zod.email(),
    password: zod.string().min(6)
});
app.post("/api/v1/signup", async (req, res) => {
    const { success, error } = signupBodySchema.safeParse(req.body);
    if (!success) {
        return res.status(400).json({
            message: "Invalid request body",
            error: error.issues
        });
    }
    const existingUser = await User.findOne({
        username: req.body.username
    });
    if (existingUser) {
        return res.status(400).json({
            message: "User already exists"
        });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
        username: req.body.username,
        password: hashedPassword
    });
    res.json({
        message: "User signed up successfully"
    });
});
app.post("/api/v1/signin", async (req, res) => {
    const result = signinBodySchema.safeParse(req.body);
    if (!result.success) {
        return res.status(400).json({
            message: "Invalid request body",
            error: result.error.issues
        });
    }
    const { username, password } = result.data;
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
        return res.status(401).json({
            message: "User does not exist"
        });
    }
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
        return res.status(400).json({
            message: "Invalid password"
        });
    }
    const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET);
    res.json({
        message: "User signed in successfully",
        token
    });
});
app.post("/api/v1/content", async (req, res) => {
});
app.get("/api/v1/content", async (req, res) => {
});
app.delete("/api/v1/content", async (req, res) => {
});
app.post("/api/v1/brain/share", async (req, res) => {
});
app.get("/api/v1/brain/:shareLink", async (req, res) => {
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=index.js.map