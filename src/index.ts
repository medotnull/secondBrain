import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { User, Content } from './db.js';
import zod from 'zod';
import config from "./config.js";
import { userMiddleware } from "./middleware.js";
import mongoose from "mongoose";
import { Request } from "express";


const app = express();
app.use(express.json());

const signupBodySchema = zod.object({
        username: zod.email(),
        password: zod.string().min(6)
    })

const signinBodySchema = zod.object({
    username: zod.email(),
    password: zod.string().min(6)
})

app.post("/api/v1/signup", async (req, res) => {
    const {success, error} = signupBodySchema.safeParse(req.body);
    if(!success){
        return res.status(400).json({
            message: "Invalid request body",
            error: error.issues
        })
    }

    const existingUser = await User.findOne({
        username: req.body.username
    })
    if(existingUser){
        return res.status(400).json({
            message: "User already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    await User.create({
        username: req.body.username,
        password: hashedPassword
    })

    res.json({
        message: "User signed up successfully"
    })

})

app.post("/api/v1/signin", async (req, res) => {
    const result = signinBodySchema.safeParse(req.body);
    if(!result.success){
        return res.status(400).json({
            message: "Invalid request body",
            error: result.error.issues
        })
    }

    const { username, password } = result.data;

    const existingUser = await User.findOne({username})

    if(!existingUser){
        return res.status(401).json({
            message: "User does not exist"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password!);

    if(!isPasswordValid){
        return res.status(400).json({
            message: "Invalid password"
        })
    }

    const token = jwt.sign(
        {userId: existingUser._id}, config.jwtSecret!,
    );
    //generate jwt payload signed with secret key

    res.json({
        message: "User signed in successfully",
        token
    })

})

app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const link = req.body.link;
    const type = req.body.type; // 'article', 'image', 'video', etc.

    if (!type) {
        return res.status(400).json({
            message: "Link and type are required"
        })
    }

    const content = await Content.create({
        title: req.body.title,
        link: req.body.link,
        type: req.body.type,
        userId: req.body.userId,
        tags: req.body.tags || [],
    })

    res.json({
        message: "Content created successfully",
        content
    })
})

app.get("/api/v1/content", async (req, res) => {
    const userId = req.query.userId as string;

    let query: any = {};
    if (!userId) {
        query.userId = new mongoose.Types.ObjectId(req.user.userId);
    } else {
        query.userId = new mongoose.Types.ObjectId(userId);
    }
    const content = await Content.find(query)
        .populate<{userId: {username: string}}>("userId", "username") //get the username that is mapped to userId 
        .lean();  //faster read-only operation

    res.json({
        success: true,
        count: content.length,
        content
    });

})

app.delete("/api/v1/content", async (req, res) => {
    const contentId = req.body.contentId;

    await Content.deleteMany({
        contentId,
        userId: req.userId
    })

    res.json({
        message: "Content deleted successfully"
    })


})

app.post("/api/v1/brain/share", async (req, res) => {

})

app.get("/api/v1/brain/:shareLink", async (req, res) =>{
    
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})