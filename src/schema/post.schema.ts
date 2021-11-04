import { object, string, TypeOf } from "zod";

const payload = {
  body: object({
    title: string({
      required_error: "Title is required",
    }),
    description: string({
      required_error: "Description is required",
    }),
    image: string({
      required_error: "Image is required",
    }),
  }),
};

const params = {
  params: object({
    postId: string({
      required_error: "PostId is required",
    }),
  }),
};

export const createPostSchema = object({
  ...payload,
});

export const updatePostSchema = object({
  ...payload,
  ...params,
});

export const deletePostSchema = object({
  ...params,
});

export const getPostSchema = object({
  ...params,
});

export type createPostInput = TypeOf<typeof createPostSchema>;
export type updatePostInput = TypeOf<typeof updatePostSchema>;
export type getPostInput = TypeOf<typeof getPostSchema>;
export type deletePostInput = TypeOf<typeof deletePostSchema>;
