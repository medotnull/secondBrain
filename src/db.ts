import mongoose,{ model, Schema } from "mongoose";
import config from "./config.js";

 
mongoose.connect(config.mongoUri);

export const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String,
})

export const User = mongoose.model('User', UserSchema);


export const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}],
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},

})

export const Content = mongoose.model('Content', ContentSchema);