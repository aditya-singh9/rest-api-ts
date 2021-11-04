import mongoose from "mongoose";
import { customAlphabet } from "nanoid";
import { UserDocument } from "./user.model";

const nanoid = customAlphabet("abcdefghijklmnopqrstuvwxyz0123456789", 10);
export interface PostDocument extends mongoose.Document {
  user: UserDocument["_id"];
  title: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const PostSchema = new mongoose.Schema(
  {
    PostId: {
      type: String,
      required: true,
      unique: true,
      default: () => `post_${nanoid()}`,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const PostModel = mongoose.model<PostDocument>("Post", PostSchema);

export default PostModel;
