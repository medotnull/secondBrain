import mongoose,{ model, Schema } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

 
mongoose.connect(process.env.MONGO_URL!);

export const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String,
})

export const User = mongoose.model('User', UserSchema);
