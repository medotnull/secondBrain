import mongoose, { model, Schema, Document, Model } from "mongoose";
import config from "./config.js";
mongoose.connect(config.mongoUri);
export const UserSchema = new Schema({
    username: { type: String, unique: true },
    password: String,
});
export const User = mongoose.model('User', UserSchema);
export const ContentSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    link: String,
    type: {
        type: String,
        enum: {
            values: ['link', 'note', 'bookmark'],
            message: 'Type must be link, note, or bookmark'
        },
        required: [true, 'Type is required']
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User ID is required']
    },
    tags: [{
            type: Schema.Types.ObjectId,
            ref: 'Tag'
        }]
}, {
    timestamps: true // createdAt, updatedAt auto add
});
export const Content = model('Content', ContentSchema);
// Hamesha Mongoose model banate time:
// 1. Interface IModelName banao ✅
// 2. Schema<IModelName> use karo ✅  
// 3. Controller mein type safety milegi ✅
//# sourceMappingURL=db.js.map