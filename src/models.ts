import mongoose, { Schema, Document } from "mongoose";

export interface PostDocument extends Document {
  title: string;
  content: string;
  createdAt: Date;
}

const PostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export const Post = mongoose.model<PostDocument>("Post", PostSchema);
