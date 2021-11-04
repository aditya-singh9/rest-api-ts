import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from "mongoose";
import PostModel, { PostDocument } from "../models/post.model";

export async function createPost(
  input: DocumentDefinition<Omit<PostDocument, "createdAt" | "updatedAt">>
) {
  return PostModel.create(input);
}

export async function findPost(
  query: FilterQuery<PostDocument>,
  options: QueryOptions = { lean: true }
) {
  return PostModel.findOne(query, {}, options);
}

export async function findAndUpdatePost(
  query: FilterQuery<PostDocument>,
  update: UpdateQuery<PostDocument>,
  options: QueryOptions
) {
  return PostModel.findOneAndUpdate(query, update, options);
}

export async function deletePost(query: FilterQuery<PostDocument>) {
  return PostModel.deleteOne(query);
}
