import {
  CategoryMutationResolver,
  CategoryQueryResolver,
  CommentMutationResolver,
  CommentQueryResolver,
  MessageMutationResolver,
  MessageQueryResolver,
  PostMutationResolver,
  PostQueryResolver,
  PrivateMessageMutationResolver,
  PrivateMessageQueryResolver,
  UserMutationResolver,
  UserQueryResolver,
  VoteQueryResolver
} from "."

export const resolversArray = [
  PostQueryResolver,
  PostMutationResolver,
  UserQueryResolver,
  UserMutationResolver,
  MessageQueryResolver,
  MessageMutationResolver,
  PrivateMessageQueryResolver,
  PrivateMessageMutationResolver,
  VoteQueryResolver,
  CategoryMutationResolver,
  CategoryQueryResolver,
  CommentMutationResolver,
  CommentQueryResolver
] as const
