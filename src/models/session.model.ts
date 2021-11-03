import mongoose from "mongoose";
import { UserDocument } from "./user.model";

export interface SchemaDocument extends mongoose.Document {
  user: UserDocument["_id"];
  valid: Boolean;
  userAgent: String;
  createdAt: Date;
  updatedAt: Date;
}

const sessionSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    valid: { type: Boolean, required: true },
    userAgent: { type: String },
  },
  {
    timestamps: true,
  }
);

const SessionModel = mongoose.model("User", sessionSchema);

export default SessionModel;
