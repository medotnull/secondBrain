import mongoose,{ model, Schema, Document, Model } from "mongoose";
import config from "./config.js";

 
mongoose.connect(config.mongoUri);

export const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String,
})

export const User = mongoose.model('User', UserSchema);

//Blueprint of data structure (TypeScript ke liye)
//<IContent> generic type hai jo TypeScript ko bolta hai
// Link between interface + schema (type safety connect karta hai)
export interface IContent extends Document {
  title: string;
  link?: string;
  type: 'link' | 'note' | 'bookmark';  // ✅ Added!
  userId: Schema.Types.ObjectId;
  tags: Schema.Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

export const ContentSchema = new Schema<IContent>(
  {
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
  },
  { 
    timestamps: true  // createdAt, updatedAt auto add
  }
);

export const Content: Model<IContent> = model<IContent>('Content', ContentSchema);
// Hamesha Mongoose model banate time:
// 1. Interface IModelName banao ✅
// 2. Schema<IModelName> use karo ✅  
// 3. Controller mein type safety milegi ✅