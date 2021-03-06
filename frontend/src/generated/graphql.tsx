import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The Email scalar type represents E-Mail addresses compliant to RFC 822. */
  Email: any;
};

export type AddUserInput = {
  username: Scalars['String'];
};

export type AddUserMutationResponse = {
  __typename?: 'AddUserMutationResponse';
  errors?: Maybe<Array<FieldError>>;
  friend?: Maybe<User>;
  me?: Maybe<User>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  name: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  messages?: Maybe<Array<Message>>;
  chatUsers?: Maybe<Array<User>>;
};

export type CategoryInput = {
  name: Scalars['String'];
};

export type CategoryMutationResponse = {
  __typename?: 'CategoryMutationResponse';
  errors?: Maybe<Array<FieldError>>;
  category?: Maybe<Category>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  body: Scalars['String'];
  createdBy: User;
  post: Post;
};

export type CommentInput = {
  body: Scalars['String'];
  postId: Scalars['Int'];
};

export type CommentMutationResponse = {
  __typename?: 'CommentMutationResponse';
  errors?: Maybe<Array<FieldError>>;
  comment?: Maybe<Comment>;
  post?: Maybe<Post>;
};

export type CreatePostInput = {
  categoryId: Scalars['Int'];
  title: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  imageH?: Maybe<Scalars['Int']>;
  imageW?: Maybe<Scalars['Int']>;
};

export type EditPostInput = {
  postId: Scalars['Int'];
  categoryId: Scalars['Int'];
  title: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  imageH?: Maybe<Scalars['String']>;
  imageW?: Maybe<Scalars['String']>;
};

export type EditUserInput = {
  email?: Maybe<Scalars['Email']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
};


export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['Email'];
  password: Scalars['String'];
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  content: Scalars['String'];
  sentBy: User;
  category: Category;
};

export type MessageInput = {
  content: Scalars['String'];
  categoryId: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: CategoryMutationResponse;
  joinChatRoom: CategoryMutationResponse;
  leaveChatRoom: CategoryMutationResponse;
  createComment: CommentMutationResponse;
  editComment: CommentMutationResponse;
  createMessage: Scalars['Boolean'];
  createPost: PostMutationResponse;
  editPost: PostMutationResponse;
  deletePost: PostMutationResponse;
  vote: VoteMutationResponse;
  sendPrivateMessage: PrivateMessage;
  forgotPassword: Scalars['Boolean'];
  register: UserMutationResponse;
  editUser: UserMutationResponse;
  addFriend: AddUserMutationResponse;
  login: UserMutationResponse;
  logout: UserLogoutMutationResponse;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationJoinChatRoomArgs = {
  data: CategoryInput;
};


export type MutationLeaveChatRoomArgs = {
  data: CategoryInput;
};


export type MutationCreateCommentArgs = {
  data: CommentInput;
};


export type MutationEditCommentArgs = {
  data: CommentInput;
};


export type MutationCreateMessageArgs = {
  data: MessageInput;
};


export type MutationCreatePostArgs = {
  data: CreatePostInput;
};


export type MutationEditPostArgs = {
  data: EditPostInput;
};


export type MutationDeletePostArgs = {
  first?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


export type MutationVoteArgs = {
  data: VoteInput;
};


export type MutationSendPrivateMessageArgs = {
  data: PrivateMessageInput;
};


export type MutationForgotPasswordArgs = {
  email: EditUserInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationEditUserArgs = {
  data: EditUserInput;
};


export type MutationAddFriendArgs = {
  data: AddUserInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  title: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  imageH?: Maybe<Scalars['Int']>;
  imageW?: Maybe<Scalars['Int']>;
  author: User;
  category: Category;
  votes?: Maybe<Array<Vote>>;
  comments?: Maybe<Array<Comment>>;
  totalComments?: Maybe<_QueryMeta>;
  totalVotes?: Maybe<_QueryMeta>;
};

export type PostMutationResponse = {
  __typename?: 'PostMutationResponse';
  errors?: Maybe<Array<FieldError>>;
  post?: Maybe<Post>;
};

export type PrivateMessage = {
  __typename?: 'PrivateMessage';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  body: Scalars['String'];
  sentBy: User;
  sentTo: User;
};

export type PrivateMessageInput = {
  body: Scalars['String'];
  userId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  category?: Maybe<Category>;
  categories?: Maybe<Array<Category>>;
  comment: Comment;
  comments?: Maybe<Array<Comment>>;
  message?: Maybe<Message>;
  messages?: Maybe<Array<Message>>;
  _allPostsMeta: _QueryMeta;
  _categoryPostsMeta: _QueryMeta;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Post>>;
  privateMessage?: Maybe<PrivateMessage>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  me?: Maybe<User>;
  myChatRooms?: Maybe<Array<Category>>;
  myPrivateMessages?: Maybe<Array<PrivateMessage>>;
  myFriends?: Maybe<Array<User>>;
};


export type QueryCategoryArgs = {
  categoryId: Scalars['Int'];
};


export type QueryCategoriesArgs = {
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryCommentArgs = {
  first?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryCommentsArgs = {
  first?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryMessagesArgs = {
  categoryId: Scalars['Int'];
};


export type Query_CategoryPostsMetaArgs = {
  first?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryPostArgs = {
  first?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryPostsArgs = {
  first?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};


export type QueryUserArgs = {
  data: EditUserInput;
};

export type RegisterInput = {
  email: Scalars['Email'];
  username: Scalars['String'];
  password: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  newCategory: Category;
  userJoinedChannel: User;
  userLeftChannel: User;
  newMessage: Message;
  newPrivateMessage: PrivateMessage;
  newUser: User;
};


export type SubscriptionUserJoinedChannelArgs = {
  categoryId: Scalars['Int'];
};


export type SubscriptionUserLeftChannelArgs = {
  categoryId: Scalars['Int'];
};


export type SubscriptionNewMessageArgs = {
  categoryId: Scalars['Int'];
};


export type SubscriptionNewPrivateMessageArgs = {
  userId: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  online?: Maybe<Scalars['Boolean']>;
  email: Scalars['Email'];
  username: Scalars['String'];
  avatar?: Maybe<Scalars['String']>;
  about?: Maybe<Scalars['String']>;
  friends: Array<User>;
  privateMessages: Array<PrivateMessage>;
  chatRooms: Array<Category>;
};

export type UserLogoutMutationResponse = {
  __typename?: 'UserLogoutMutationResponse';
  message?: Maybe<Scalars['String']>;
  success?: Maybe<Scalars['String']>;
};

export type UserMutationResponse = {
  __typename?: 'UserMutationResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
  message?: Maybe<Message>;
};

export type Vote = {
  __typename?: 'Vote';
  id: Scalars['ID'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  value: Scalars['Int'];
  castBy: User;
};

export type VoteInput = {
  postId: Scalars['Int'];
  value: Scalars['Int'];
};

export type VoteMutationResponse = {
  __typename?: 'VoteMutationResponse';
  errors?: Maybe<Array<FieldError>>;
  vote?: Maybe<Vote>;
  post?: Maybe<Post>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
  score?: Maybe<Scalars['Int']>;
};

export type CategoryDetailsFragment = (
  { __typename?: 'Category' }
  & Pick<Category, 'createdAt' | 'id' | 'name'>
);

export type CommentDetailsFragment = (
  { __typename?: 'Comment' }
  & Pick<Comment, 'id' | 'createdAt' | 'updatedAt' | 'body'>
);

export type PostDetailsFragment = (
  { __typename?: 'Post' }
  & Pick<Post, 'id' | 'createdAt' | 'updatedAt' | 'title' | 'imageH' | 'imageW' | 'text' | 'image' | 'link'>
);

export type UserDetailsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'online'>
);

export type UserMeDetailsFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'username' | 'email' | 'about' | 'avatar'>
);

export type CreateSubredditMutationVariables = Exact<{
  data: CategoryInput;
}>;


export type CreateSubredditMutation = (
  { __typename?: 'Mutation' }
  & { createCategory: (
    { __typename?: 'CategoryMutationResponse' }
    & { category?: Maybe<(
      { __typename?: 'Category' }
      & CategoryDetailsFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type JoinChatRoomMutationVariables = Exact<{
  data: CategoryInput;
}>;


export type JoinChatRoomMutation = (
  { __typename?: 'Mutation' }
  & { joinChatRoom: (
    { __typename?: 'CategoryMutationResponse' }
    & { category?: Maybe<(
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
      & { chatUsers?: Maybe<Array<(
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username'>
      )>> }
    )> }
  ) }
);

export type CreateCommentMutationVariables = Exact<{
  data: CommentInput;
}>;


export type CreateCommentMutation = (
  { __typename?: 'Mutation' }
  & { createComment: (
    { __typename?: 'CommentMutationResponse' }
    & { comment?: Maybe<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'body'>
      & { createdBy: (
        { __typename?: 'User' }
        & Pick<User, 'id' | 'username'>
      ), post: (
        { __typename?: 'Post' }
        & Pick<Post, 'id'>
      ) }
    )>, post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id' | 'title'>
      & { totalComments?: Maybe<(
        { __typename?: '_QueryMeta' }
        & Pick<_QueryMeta, 'count'>
      )>, totalVotes?: Maybe<(
        { __typename?: '_QueryMeta' }
        & Pick<_QueryMeta, 'count'>
      )>, comments?: Maybe<Array<(
        { __typename?: 'Comment' }
        & Pick<Comment, 'id'>
        & { createdBy: (
          { __typename?: 'User' }
          & Pick<User, 'username'>
        ) }
      )>> }
    )> }
  ) }
);

export type CreateMessageMutationVariables = Exact<{
  data: MessageInput;
}>;


export type CreateMessageMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createMessage'>
);

export type CreatePostMutationVariables = Exact<{
  data: CreatePostInput;
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { createPost: (
    { __typename?: 'PostMutationResponse' }
    & { post?: Maybe<(
      { __typename?: 'Post' }
      & { comments?: Maybe<Array<(
        { __typename?: 'Comment' }
        & { createdBy: (
          { __typename?: 'User' }
          & UserDetailsFragment
        ) }
        & CommentDetailsFragment
      )>>, author: (
        { __typename?: 'User' }
        & UserDetailsFragment
      ), category: (
        { __typename?: 'Category' }
        & CategoryDetailsFragment
      ), totalComments?: Maybe<(
        { __typename?: '_QueryMeta' }
        & Pick<_QueryMeta, 'count'>
      )>, totalVotes?: Maybe<(
        { __typename?: '_QueryMeta' }
        & Pick<_QueryMeta, 'score' | 'count'>
      )> }
      & PostDetailsFragment
    )> }
  ) }
);

export type DeletePostMutationVariables = Exact<{
  postId?: Maybe<Scalars['Int']>;
}>;


export type DeletePostMutation = (
  { __typename?: 'Mutation' }
  & { deletePost: (
    { __typename?: 'PostMutationResponse' }
    & { post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id'>
    )> }
  ) }
);

export type EditPostMutationVariables = Exact<{
  data: EditPostInput;
}>;


export type EditPostMutation = (
  { __typename?: 'Mutation' }
  & { editPost: (
    { __typename?: 'PostMutationResponse' }
    & { post?: Maybe<(
      { __typename?: 'Post' }
      & { category: (
        { __typename?: 'Category' }
        & CategoryDetailsFragment
      ) }
      & PostDetailsFragment
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type AddFriendMutationVariables = Exact<{
  data: AddUserInput;
}>;


export type AddFriendMutation = (
  { __typename?: 'Mutation' }
  & { addFriend: (
    { __typename?: 'AddUserMutationResponse' }
    & { me?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )>, friend?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'online'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type EditUserMutationVariables = Exact<{
  data: EditUserInput;
}>;


export type EditUserMutation = (
  { __typename?: 'Mutation' }
  & { editUser: (
    { __typename?: 'UserMutationResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'about' | 'email' | 'avatar'>
    )> }
  ) }
);

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserMutationResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'email'>
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & { logout: (
    { __typename?: 'UserLogoutMutationResponse' }
    & Pick<UserLogoutMutationResponse, 'message' | 'success'>
  ) }
);

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserMutationResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'email'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>> }
  ) }
);

export type SendPrivateMessageMutationVariables = Exact<{
  data: PrivateMessageInput;
}>;


export type SendPrivateMessageMutation = (
  { __typename?: 'Mutation' }
  & { sendPrivateMessage: (
    { __typename?: 'PrivateMessage' }
    & Pick<PrivateMessage, 'id' | 'body' | 'createdAt'>
    & { sentTo: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ), sentBy: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ) }
  ) }
);

export type CreateVoteMutationVariables = Exact<{
  data: VoteInput;
}>;


export type CreateVoteMutation = (
  { __typename?: 'Mutation' }
  & { vote: (
    { __typename?: 'VoteMutationResponse' }
    & { vote?: Maybe<(
      { __typename?: 'Vote' }
      & Pick<Vote, 'value' | 'id'>
    )>, post?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id'>
      & { totalVotes?: Maybe<(
        { __typename?: '_QueryMeta' }
        & Pick<_QueryMeta, 'count' | 'score'>
      )> }
    )> }
  ) }
);

export type CategoriesQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
}>;


export type CategoriesQuery = (
  { __typename?: 'Query' }
  & { categories?: Maybe<Array<(
    { __typename?: 'Category' }
    & CategoryDetailsFragment
  )>> }
);

export type CategoryQueryVariables = Exact<{
  categoryId: Scalars['Int'];
}>;


export type CategoryQuery = (
  { __typename?: 'Query' }
  & { category?: Maybe<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name'>
    & { chatUsers?: Maybe<Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username' | 'online'>
    )>> }
  )> }
);

export type CommentQueryVariables = Exact<{
  postId?: Maybe<Scalars['Int']>;
}>;


export type CommentQuery = (
  { __typename?: 'Query' }
  & { comment: (
    { __typename?: 'Comment' }
    & { createdBy: (
      { __typename?: 'User' }
      & UserDetailsFragment
    ) }
    & CommentDetailsFragment
  ) }
);

export type CommentsQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  postId?: Maybe<Scalars['Int']>;
}>;


export type CommentsQuery = (
  { __typename?: 'Query' }
  & { comments?: Maybe<Array<(
    { __typename?: 'Comment' }
    & { createdBy: (
      { __typename?: 'User' }
      & UserDetailsFragment
    ) }
    & CommentDetailsFragment
  )>> }
);

export type CommentsForPostQueryVariables = Exact<{
  postId: Scalars['Int'];
  orderBy?: Maybe<Scalars['String']>;
}>;


export type CommentsForPostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'id'>
    & { comments?: Maybe<Array<(
      { __typename?: 'Comment' }
      & { createdBy: (
        { __typename?: 'User' }
        & UserDetailsFragment
      ) }
      & CommentDetailsFragment
    )>> }
  )> }
);

export type ChatRoomMessagesQueryVariables = Exact<{
  categoryId: Scalars['Int'];
}>;


export type ChatRoomMessagesQuery = (
  { __typename?: 'Query' }
  & { messages?: Maybe<Array<(
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'createdAt' | 'content'>
    & { sentBy: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ), category: (
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    ) }
  )>> }
);

export type PostQueryVariables = Exact<{
  postId: Scalars['Int'];
}>;


export type PostQuery = (
  { __typename?: 'Query' }
  & { post?: Maybe<(
    { __typename?: 'Post' }
    & { category: (
      { __typename?: 'Category' }
      & CategoryDetailsFragment
    ), author: (
      { __typename?: 'User' }
      & UserDetailsFragment
    ), comments?: Maybe<Array<(
      { __typename?: 'Comment' }
      & CommentDetailsFragment
    )>>, totalComments?: Maybe<(
      { __typename?: '_QueryMeta' }
      & Pick<_QueryMeta, 'count'>
    )>, totalVotes?: Maybe<(
      { __typename?: '_QueryMeta' }
      & Pick<_QueryMeta, 'score' | 'count'>
    )> }
    & PostDetailsFragment
  )> }
);

export type PostsQueryVariables = Exact<{
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['String']>;
}>;


export type PostsQuery = (
  { __typename?: 'Query' }
  & { posts?: Maybe<Array<(
    { __typename?: 'Post' }
    & { category: (
      { __typename?: 'Category' }
      & CategoryDetailsFragment
    ), author: (
      { __typename?: 'User' }
      & UserDetailsFragment
    ), comments?: Maybe<Array<(
      { __typename?: 'Comment' }
      & CommentDetailsFragment
    )>>, totalComments?: Maybe<(
      { __typename?: '_QueryMeta' }
      & Pick<_QueryMeta, 'count'>
    )>, totalVotes?: Maybe<(
      { __typename?: '_QueryMeta' }
      & Pick<_QueryMeta, 'score' | 'count'>
    )> }
    & PostDetailsFragment
  )>>, _allPostsMeta: (
    { __typename?: '_QueryMeta' }
    & Pick<_QueryMeta, 'count'>
  ), _categoryPostsMeta: (
    { __typename?: '_QueryMeta' }
    & Pick<_QueryMeta, 'count'>
  ) }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & UserMeDetailsFragment
  )> }
);

export type MyChatRoomsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyChatRoomsQuery = (
  { __typename?: 'Query' }
  & { myChatRooms?: Maybe<Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name'>
    & { chatUsers?: Maybe<Array<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )>> }
  )>> }
);

export type MyFriendsQueryVariables = Exact<{ [key: string]: never; }>;


export type MyFriendsQuery = (
  { __typename?: 'Query' }
  & { myFriends?: Maybe<Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'online'>
  )>> }
);

export type MyPrivateMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type MyPrivateMessagesQuery = (
  { __typename?: 'Query' }
  & { myPrivateMessages?: Maybe<Array<(
    { __typename?: 'PrivateMessage' }
    & Pick<PrivateMessage, 'id' | 'createdAt' | 'body'>
    & { sentBy: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ), sentTo: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ) }
  )>> }
);

export type UserQueryVariables = Exact<{
  data: EditUserInput;
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'about' | 'online'>
  )> }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email' | 'about'>
  )>> }
);

export type UpdateMetaQueryVariables = Exact<{
  category?: Maybe<Scalars['String']>;
}>;


export type UpdateMetaQuery = (
  { __typename?: 'Query' }
  & { _allPostsMeta: (
    { __typename?: '_QueryMeta' }
    & Pick<_QueryMeta, 'count'>
  ), _categoryPostsMeta: (
    { __typename?: '_QueryMeta' }
    & Pick<_QueryMeta, 'count'>
  ) }
);

export type CategoryChatSubSubscriptionVariables = Exact<{
  categoryId: Scalars['Int'];
}>;


export type CategoryChatSubSubscription = (
  { __typename?: 'Subscription' }
  & { newMessage: (
    { __typename?: 'Message' }
    & Pick<Message, 'id' | 'createdAt' | 'content'>
    & { sentBy: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    ), category: (
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    ) }
  ) }
);

export type NewUserSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type NewUserSubscription = (
  { __typename?: 'Subscription' }
  & { newUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'email'>
  ) }
);

export const CategoryDetailsFragmentDoc = gql`
    fragment CategoryDetails on Category {
  createdAt
  id
  name
}
    `;
export const CommentDetailsFragmentDoc = gql`
    fragment CommentDetails on Comment {
  id
  createdAt
  updatedAt
  body
}
    `;
export const PostDetailsFragmentDoc = gql`
    fragment PostDetails on Post {
  id
  createdAt
  updatedAt
  title
  imageH
  imageW
  text
  image
  link
}
    `;
export const UserDetailsFragmentDoc = gql`
    fragment UserDetails on User {
  id
  username
  online
}
    `;
export const UserMeDetailsFragmentDoc = gql`
    fragment UserMeDetails on User {
  id
  username
  email
  about
  avatar
}
    `;
export const CreateSubredditDocument = gql`
    mutation createSubreddit($data: CategoryInput!) {
  createCategory(data: $data) {
    category {
      ...CategoryDetails
    }
    errors {
      field
      message
    }
  }
}
    ${CategoryDetailsFragmentDoc}`;
export type CreateSubredditMutationFn = Apollo.MutationFunction<CreateSubredditMutation, CreateSubredditMutationVariables>;

/**
 * __useCreateSubredditMutation__
 *
 * To run a mutation, you first call `useCreateSubredditMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSubredditMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSubredditMutation, { data, loading, error }] = useCreateSubredditMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSubredditMutation(baseOptions?: Apollo.MutationHookOptions<CreateSubredditMutation, CreateSubredditMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSubredditMutation, CreateSubredditMutationVariables>(CreateSubredditDocument, options);
      }
export type CreateSubredditMutationHookResult = ReturnType<typeof useCreateSubredditMutation>;
export type CreateSubredditMutationResult = Apollo.MutationResult<CreateSubredditMutation>;
export type CreateSubredditMutationOptions = Apollo.BaseMutationOptions<CreateSubredditMutation, CreateSubredditMutationVariables>;
export const JoinChatRoomDocument = gql`
    mutation JoinChatRoom($data: CategoryInput!) {
  joinChatRoom(data: $data) {
    category {
      id
      name
      chatUsers {
        id
        username
      }
    }
  }
}
    `;
export type JoinChatRoomMutationFn = Apollo.MutationFunction<JoinChatRoomMutation, JoinChatRoomMutationVariables>;

/**
 * __useJoinChatRoomMutation__
 *
 * To run a mutation, you first call `useJoinChatRoomMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinChatRoomMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinChatRoomMutation, { data, loading, error }] = useJoinChatRoomMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useJoinChatRoomMutation(baseOptions?: Apollo.MutationHookOptions<JoinChatRoomMutation, JoinChatRoomMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinChatRoomMutation, JoinChatRoomMutationVariables>(JoinChatRoomDocument, options);
      }
export type JoinChatRoomMutationHookResult = ReturnType<typeof useJoinChatRoomMutation>;
export type JoinChatRoomMutationResult = Apollo.MutationResult<JoinChatRoomMutation>;
export type JoinChatRoomMutationOptions = Apollo.BaseMutationOptions<JoinChatRoomMutation, JoinChatRoomMutationVariables>;
export const CreateCommentDocument = gql`
    mutation createComment($data: CommentInput!) {
  createComment(data: $data) {
    comment {
      id
      body
      createdBy {
        id
        username
      }
      post {
        id
      }
    }
    post {
      id
      title
      totalComments {
        count
      }
      totalVotes {
        count
      }
      comments {
        id
        createdBy {
          username
        }
      }
    }
  }
}
    `;
export type CreateCommentMutationFn = Apollo.MutationFunction<CreateCommentMutation, CreateCommentMutationVariables>;

/**
 * __useCreateCommentMutation__
 *
 * To run a mutation, you first call `useCreateCommentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCommentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCommentMutation, { data, loading, error }] = useCreateCommentMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCommentMutation(baseOptions?: Apollo.MutationHookOptions<CreateCommentMutation, CreateCommentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCommentMutation, CreateCommentMutationVariables>(CreateCommentDocument, options);
      }
export type CreateCommentMutationHookResult = ReturnType<typeof useCreateCommentMutation>;
export type CreateCommentMutationResult = Apollo.MutationResult<CreateCommentMutation>;
export type CreateCommentMutationOptions = Apollo.BaseMutationOptions<CreateCommentMutation, CreateCommentMutationVariables>;
export const CreateMessageDocument = gql`
    mutation CreateMessage($data: MessageInput!) {
  createMessage(data: $data)
}
    `;
export type CreateMessageMutationFn = Apollo.MutationFunction<CreateMessageMutation, CreateMessageMutationVariables>;

/**
 * __useCreateMessageMutation__
 *
 * To run a mutation, you first call `useCreateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMessageMutation, { data, loading, error }] = useCreateMessageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateMessageMutation(baseOptions?: Apollo.MutationHookOptions<CreateMessageMutation, CreateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMessageMutation, CreateMessageMutationVariables>(CreateMessageDocument, options);
      }
export type CreateMessageMutationHookResult = ReturnType<typeof useCreateMessageMutation>;
export type CreateMessageMutationResult = Apollo.MutationResult<CreateMessageMutation>;
export type CreateMessageMutationOptions = Apollo.BaseMutationOptions<CreateMessageMutation, CreateMessageMutationVariables>;
export const CreatePostDocument = gql`
    mutation createPost($data: CreatePostInput!) {
  createPost(data: $data) {
    post {
      ...PostDetails
      comments {
        ...CommentDetails
        createdBy {
          ...UserDetails
        }
      }
      author {
        ...UserDetails
      }
      category {
        ...CategoryDetails
      }
      totalComments {
        count
      }
      totalVotes {
        score
        count
      }
    }
  }
}
    ${PostDetailsFragmentDoc}
${CommentDetailsFragmentDoc}
${UserDetailsFragmentDoc}
${CategoryDetailsFragmentDoc}`;
export type CreatePostMutationFn = Apollo.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: Apollo.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, options);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = Apollo.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = Apollo.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const DeletePostDocument = gql`
    mutation DeletePost($postId: Int) {
  deletePost(postId: $postId) {
    post {
      id
    }
  }
}
    `;
export type DeletePostMutationFn = Apollo.MutationFunction<DeletePostMutation, DeletePostMutationVariables>;

/**
 * __useDeletePostMutation__
 *
 * To run a mutation, you first call `useDeletePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePostMutation, { data, loading, error }] = useDeletePostMutation({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useDeletePostMutation(baseOptions?: Apollo.MutationHookOptions<DeletePostMutation, DeletePostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePostMutation, DeletePostMutationVariables>(DeletePostDocument, options);
      }
export type DeletePostMutationHookResult = ReturnType<typeof useDeletePostMutation>;
export type DeletePostMutationResult = Apollo.MutationResult<DeletePostMutation>;
export type DeletePostMutationOptions = Apollo.BaseMutationOptions<DeletePostMutation, DeletePostMutationVariables>;
export const EditPostDocument = gql`
    mutation EditPost($data: EditPostInput!) {
  editPost(data: $data) {
    post {
      ...PostDetails
      category {
        ...CategoryDetails
      }
    }
    errors {
      field
      message
    }
  }
}
    ${PostDetailsFragmentDoc}
${CategoryDetailsFragmentDoc}`;
export type EditPostMutationFn = Apollo.MutationFunction<EditPostMutation, EditPostMutationVariables>;

/**
 * __useEditPostMutation__
 *
 * To run a mutation, you first call `useEditPostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditPostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editPostMutation, { data, loading, error }] = useEditPostMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditPostMutation(baseOptions?: Apollo.MutationHookOptions<EditPostMutation, EditPostMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditPostMutation, EditPostMutationVariables>(EditPostDocument, options);
      }
export type EditPostMutationHookResult = ReturnType<typeof useEditPostMutation>;
export type EditPostMutationResult = Apollo.MutationResult<EditPostMutation>;
export type EditPostMutationOptions = Apollo.BaseMutationOptions<EditPostMutation, EditPostMutationVariables>;
export const AddFriendDocument = gql`
    mutation AddFriend($data: AddUserInput!) {
  addFriend(data: $data) {
    me {
      id
      username
    }
    friend {
      id
      username
      online
    }
    errors {
      field
      message
    }
  }
}
    `;
export type AddFriendMutationFn = Apollo.MutationFunction<AddFriendMutation, AddFriendMutationVariables>;

/**
 * __useAddFriendMutation__
 *
 * To run a mutation, you first call `useAddFriendMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFriendMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFriendMutation, { data, loading, error }] = useAddFriendMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddFriendMutation(baseOptions?: Apollo.MutationHookOptions<AddFriendMutation, AddFriendMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFriendMutation, AddFriendMutationVariables>(AddFriendDocument, options);
      }
export type AddFriendMutationHookResult = ReturnType<typeof useAddFriendMutation>;
export type AddFriendMutationResult = Apollo.MutationResult<AddFriendMutation>;
export type AddFriendMutationOptions = Apollo.BaseMutationOptions<AddFriendMutation, AddFriendMutationVariables>;
export const EditUserDocument = gql`
    mutation editUser($data: EditUserInput!) {
  editUser(data: $data) {
    errors {
      field
      message
    }
    user {
      id
      username
      about
      email
      avatar
    }
  }
}
    `;
export type EditUserMutationFn = Apollo.MutationFunction<EditUserMutation, EditUserMutationVariables>;

/**
 * __useEditUserMutation__
 *
 * To run a mutation, you first call `useEditUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editUserMutation, { data, loading, error }] = useEditUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditUserMutation(baseOptions?: Apollo.MutationHookOptions<EditUserMutation, EditUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditUserMutation, EditUserMutationVariables>(EditUserDocument, options);
      }
export type EditUserMutationHookResult = ReturnType<typeof useEditUserMutation>;
export type EditUserMutationResult = Apollo.MutationResult<EditUserMutation>;
export type EditUserMutationOptions = Apollo.BaseMutationOptions<EditUserMutation, EditUserMutationVariables>;
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data) {
    errors {
      field
      message
    }
    user {
      id
      username
      email
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    message
    success
  }
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    user {
      id
      username
      email
    }
    errors {
      field
      message
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SendPrivateMessageDocument = gql`
    mutation SendPrivateMessage($data: PrivateMessageInput!) {
  sendPrivateMessage(data: $data) {
    id
    body
    createdAt
    sentTo {
      id
      username
    }
    sentBy {
      id
      username
    }
  }
}
    `;
export type SendPrivateMessageMutationFn = Apollo.MutationFunction<SendPrivateMessageMutation, SendPrivateMessageMutationVariables>;

/**
 * __useSendPrivateMessageMutation__
 *
 * To run a mutation, you first call `useSendPrivateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendPrivateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendPrivateMessageMutation, { data, loading, error }] = useSendPrivateMessageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSendPrivateMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendPrivateMessageMutation, SendPrivateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendPrivateMessageMutation, SendPrivateMessageMutationVariables>(SendPrivateMessageDocument, options);
      }
export type SendPrivateMessageMutationHookResult = ReturnType<typeof useSendPrivateMessageMutation>;
export type SendPrivateMessageMutationResult = Apollo.MutationResult<SendPrivateMessageMutation>;
export type SendPrivateMessageMutationOptions = Apollo.BaseMutationOptions<SendPrivateMessageMutation, SendPrivateMessageMutationVariables>;
export const CreateVoteDocument = gql`
    mutation createVote($data: VoteInput!) {
  vote(data: $data) {
    vote {
      value
      id
    }
    post {
      id
      totalVotes {
        count
        score
      }
    }
  }
}
    `;
export type CreateVoteMutationFn = Apollo.MutationFunction<CreateVoteMutation, CreateVoteMutationVariables>;

/**
 * __useCreateVoteMutation__
 *
 * To run a mutation, you first call `useCreateVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createVoteMutation, { data, loading, error }] = useCreateVoteMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateVoteMutation(baseOptions?: Apollo.MutationHookOptions<CreateVoteMutation, CreateVoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateVoteMutation, CreateVoteMutationVariables>(CreateVoteDocument, options);
      }
export type CreateVoteMutationHookResult = ReturnType<typeof useCreateVoteMutation>;
export type CreateVoteMutationResult = Apollo.MutationResult<CreateVoteMutation>;
export type CreateVoteMutationOptions = Apollo.BaseMutationOptions<CreateVoteMutation, CreateVoteMutationVariables>;
export const CategoriesDocument = gql`
    query Categories($first: Int, $orderBy: String, $skip: Int, $name: String) {
  categories(first: $first, orderBy: $orderBy, skip: $skip, name: $name) {
    ...CategoryDetails
  }
}
    ${CategoryDetailsFragmentDoc}`;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export function refetchCategoriesQuery(variables?: CategoriesQueryVariables) {
      return { query: CategoriesDocument, variables: variables }
    }
export const CategoryDocument = gql`
    query Category($categoryId: Int!) {
  category(categoryId: $categoryId) {
    id
    name
    chatUsers {
      id
      username
      online
    }
  }
}
    `;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export function refetchCategoryQuery(variables?: CategoryQueryVariables) {
      return { query: CategoryDocument, variables: variables }
    }
export const CommentDocument = gql`
    query Comment($postId: Int) {
  comment(postId: $postId) {
    ...CommentDetails
    createdBy {
      ...UserDetails
    }
  }
}
    ${CommentDetailsFragmentDoc}
${UserDetailsFragmentDoc}`;

/**
 * __useCommentQuery__
 *
 * To run a query within a React component, call `useCommentQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useCommentQuery(baseOptions?: Apollo.QueryHookOptions<CommentQuery, CommentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentQuery, CommentQueryVariables>(CommentDocument, options);
      }
export function useCommentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentQuery, CommentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentQuery, CommentQueryVariables>(CommentDocument, options);
        }
export type CommentQueryHookResult = ReturnType<typeof useCommentQuery>;
export type CommentLazyQueryHookResult = ReturnType<typeof useCommentLazyQuery>;
export type CommentQueryResult = Apollo.QueryResult<CommentQuery, CommentQueryVariables>;
export function refetchCommentQuery(variables?: CommentQueryVariables) {
      return { query: CommentDocument, variables: variables }
    }
export const CommentsDocument = gql`
    query Comments($first: Int, $orderBy: String, $skip: Int, $postId: Int) {
  comments(first: $first, orderBy: $orderBy, skip: $skip, postId: $postId) {
    ...CommentDetails
    createdBy {
      ...UserDetails
    }
  }
}
    ${CommentDetailsFragmentDoc}
${UserDetailsFragmentDoc}`;

/**
 * __useCommentsQuery__
 *
 * To run a query within a React component, call `useCommentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function useCommentsQuery(baseOptions?: Apollo.QueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
      }
export function useCommentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsQuery, CommentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentsQuery, CommentsQueryVariables>(CommentsDocument, options);
        }
export type CommentsQueryHookResult = ReturnType<typeof useCommentsQuery>;
export type CommentsLazyQueryHookResult = ReturnType<typeof useCommentsLazyQuery>;
export type CommentsQueryResult = Apollo.QueryResult<CommentsQuery, CommentsQueryVariables>;
export function refetchCommentsQuery(variables?: CommentsQueryVariables) {
      return { query: CommentsDocument, variables: variables }
    }
export const CommentsForPostDocument = gql`
    query CommentsForPost($postId: Int!, $orderBy: String) {
  post(postId: $postId, orderBy: $orderBy) {
    id
    comments {
      ...CommentDetails
      createdBy {
        ...UserDetails
      }
    }
  }
}
    ${CommentDetailsFragmentDoc}
${UserDetailsFragmentDoc}`;

/**
 * __useCommentsForPostQuery__
 *
 * To run a query within a React component, call `useCommentsForPostQuery` and pass it any options that fit your needs.
 * When your component renders, `useCommentsForPostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCommentsForPostQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useCommentsForPostQuery(baseOptions: Apollo.QueryHookOptions<CommentsForPostQuery, CommentsForPostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CommentsForPostQuery, CommentsForPostQueryVariables>(CommentsForPostDocument, options);
      }
export function useCommentsForPostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CommentsForPostQuery, CommentsForPostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CommentsForPostQuery, CommentsForPostQueryVariables>(CommentsForPostDocument, options);
        }
export type CommentsForPostQueryHookResult = ReturnType<typeof useCommentsForPostQuery>;
export type CommentsForPostLazyQueryHookResult = ReturnType<typeof useCommentsForPostLazyQuery>;
export type CommentsForPostQueryResult = Apollo.QueryResult<CommentsForPostQuery, CommentsForPostQueryVariables>;
export function refetchCommentsForPostQuery(variables?: CommentsForPostQueryVariables) {
      return { query: CommentsForPostDocument, variables: variables }
    }
export const ChatRoomMessagesDocument = gql`
    query ChatRoomMessages($categoryId: Int!) {
  messages(categoryId: $categoryId) {
    id
    createdAt
    content
    sentBy {
      id
      username
    }
    category {
      id
      name
    }
  }
}
    `;

/**
 * __useChatRoomMessagesQuery__
 *
 * To run a query within a React component, call `useChatRoomMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useChatRoomMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useChatRoomMessagesQuery({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useChatRoomMessagesQuery(baseOptions: Apollo.QueryHookOptions<ChatRoomMessagesQuery, ChatRoomMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ChatRoomMessagesQuery, ChatRoomMessagesQueryVariables>(ChatRoomMessagesDocument, options);
      }
export function useChatRoomMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ChatRoomMessagesQuery, ChatRoomMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ChatRoomMessagesQuery, ChatRoomMessagesQueryVariables>(ChatRoomMessagesDocument, options);
        }
export type ChatRoomMessagesQueryHookResult = ReturnType<typeof useChatRoomMessagesQuery>;
export type ChatRoomMessagesLazyQueryHookResult = ReturnType<typeof useChatRoomMessagesLazyQuery>;
export type ChatRoomMessagesQueryResult = Apollo.QueryResult<ChatRoomMessagesQuery, ChatRoomMessagesQueryVariables>;
export function refetchChatRoomMessagesQuery(variables?: ChatRoomMessagesQueryVariables) {
      return { query: ChatRoomMessagesDocument, variables: variables }
    }
export const PostDocument = gql`
    query Post($postId: Int!) {
  post(postId: $postId) {
    ...PostDetails
    category {
      ...CategoryDetails
    }
    author {
      ...UserDetails
    }
    comments {
      ...CommentDetails
    }
    totalComments {
      count
    }
    totalVotes {
      score
      count
    }
  }
}
    ${PostDetailsFragmentDoc}
${CategoryDetailsFragmentDoc}
${UserDetailsFragmentDoc}
${CommentDetailsFragmentDoc}`;

/**
 * __usePostQuery__
 *
 * To run a query within a React component, call `usePostQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostQuery({
 *   variables: {
 *      postId: // value for 'postId'
 *   },
 * });
 */
export function usePostQuery(baseOptions: Apollo.QueryHookOptions<PostQuery, PostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostQuery, PostQueryVariables>(PostDocument, options);
      }
export function usePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostQuery, PostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostQuery, PostQueryVariables>(PostDocument, options);
        }
export type PostQueryHookResult = ReturnType<typeof usePostQuery>;
export type PostLazyQueryHookResult = ReturnType<typeof usePostLazyQuery>;
export type PostQueryResult = Apollo.QueryResult<PostQuery, PostQueryVariables>;
export function refetchPostQuery(variables?: PostQueryVariables) {
      return { query: PostDocument, variables: variables }
    }
export const PostsDocument = gql`
    query Posts($first: Int, $orderBy: String, $skip: Int, $category: String) {
  posts(first: $first, orderBy: $orderBy, skip: $skip, category: $category) {
    ...PostDetails
    category {
      ...CategoryDetails
    }
    author {
      ...UserDetails
    }
    comments {
      ...CommentDetails
    }
    totalComments {
      count
    }
    totalVotes {
      score
      count
    }
  }
  _allPostsMeta {
    count
  }
  _categoryPostsMeta(name: $category) {
    count
  }
}
    ${PostDetailsFragmentDoc}
${CategoryDetailsFragmentDoc}
${UserDetailsFragmentDoc}
${CommentDetailsFragmentDoc}`;

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *      first: // value for 'first'
 *      orderBy: // value for 'orderBy'
 *      skip: // value for 'skip'
 *      category: // value for 'category'
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;
export function refetchPostsQuery(variables?: PostsQueryVariables) {
      return { query: PostsDocument, variables: variables }
    }
export const MeDocument = gql`
    query Me {
  me {
    ...UserMeDetails
  }
}
    ${UserMeDetailsFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export function refetchMeQuery(variables?: MeQueryVariables) {
      return { query: MeDocument, variables: variables }
    }
export const MyChatRoomsDocument = gql`
    query MyChatRooms {
  myChatRooms {
    id
    name
    chatUsers {
      id
      username
    }
  }
}
    `;

/**
 * __useMyChatRoomsQuery__
 *
 * To run a query within a React component, call `useMyChatRoomsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyChatRoomsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyChatRoomsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyChatRoomsQuery(baseOptions?: Apollo.QueryHookOptions<MyChatRoomsQuery, MyChatRoomsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyChatRoomsQuery, MyChatRoomsQueryVariables>(MyChatRoomsDocument, options);
      }
export function useMyChatRoomsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyChatRoomsQuery, MyChatRoomsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyChatRoomsQuery, MyChatRoomsQueryVariables>(MyChatRoomsDocument, options);
        }
export type MyChatRoomsQueryHookResult = ReturnType<typeof useMyChatRoomsQuery>;
export type MyChatRoomsLazyQueryHookResult = ReturnType<typeof useMyChatRoomsLazyQuery>;
export type MyChatRoomsQueryResult = Apollo.QueryResult<MyChatRoomsQuery, MyChatRoomsQueryVariables>;
export function refetchMyChatRoomsQuery(variables?: MyChatRoomsQueryVariables) {
      return { query: MyChatRoomsDocument, variables: variables }
    }
export const MyFriendsDocument = gql`
    query MyFriends {
  myFriends {
    id
    username
    online
  }
}
    `;

/**
 * __useMyFriendsQuery__
 *
 * To run a query within a React component, call `useMyFriendsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyFriendsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyFriendsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyFriendsQuery(baseOptions?: Apollo.QueryHookOptions<MyFriendsQuery, MyFriendsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyFriendsQuery, MyFriendsQueryVariables>(MyFriendsDocument, options);
      }
export function useMyFriendsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyFriendsQuery, MyFriendsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyFriendsQuery, MyFriendsQueryVariables>(MyFriendsDocument, options);
        }
export type MyFriendsQueryHookResult = ReturnType<typeof useMyFriendsQuery>;
export type MyFriendsLazyQueryHookResult = ReturnType<typeof useMyFriendsLazyQuery>;
export type MyFriendsQueryResult = Apollo.QueryResult<MyFriendsQuery, MyFriendsQueryVariables>;
export function refetchMyFriendsQuery(variables?: MyFriendsQueryVariables) {
      return { query: MyFriendsDocument, variables: variables }
    }
export const MyPrivateMessagesDocument = gql`
    query MyPrivateMessages {
  myPrivateMessages {
    id
    createdAt
    body
    sentBy {
      id
      username
    }
    sentTo {
      id
      username
    }
  }
}
    `;

/**
 * __useMyPrivateMessagesQuery__
 *
 * To run a query within a React component, call `useMyPrivateMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyPrivateMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyPrivateMessagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyPrivateMessagesQuery(baseOptions?: Apollo.QueryHookOptions<MyPrivateMessagesQuery, MyPrivateMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyPrivateMessagesQuery, MyPrivateMessagesQueryVariables>(MyPrivateMessagesDocument, options);
      }
export function useMyPrivateMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyPrivateMessagesQuery, MyPrivateMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyPrivateMessagesQuery, MyPrivateMessagesQueryVariables>(MyPrivateMessagesDocument, options);
        }
export type MyPrivateMessagesQueryHookResult = ReturnType<typeof useMyPrivateMessagesQuery>;
export type MyPrivateMessagesLazyQueryHookResult = ReturnType<typeof useMyPrivateMessagesLazyQuery>;
export type MyPrivateMessagesQueryResult = Apollo.QueryResult<MyPrivateMessagesQuery, MyPrivateMessagesQueryVariables>;
export function refetchMyPrivateMessagesQuery(variables?: MyPrivateMessagesQueryVariables) {
      return { query: MyPrivateMessagesDocument, variables: variables }
    }
export const UserDocument = gql`
    query User($data: EditUserInput!) {
  user(data: $data) {
    id
    username
    email
    about
    online
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export function refetchUserQuery(variables?: UserQueryVariables) {
      return { query: UserDocument, variables: variables }
    }
export const UsersDocument = gql`
    query Users {
  users {
    id
    username
    email
    about
  }
}
    `;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;
export function refetchUsersQuery(variables?: UsersQueryVariables) {
      return { query: UsersDocument, variables: variables }
    }
export const UpdateMetaDocument = gql`
    query UpdateMeta($category: String) {
  _allPostsMeta {
    count
  }
  _categoryPostsMeta(name: $category) {
    count
  }
}
    `;

/**
 * __useUpdateMetaQuery__
 *
 * To run a query within a React component, call `useUpdateMetaQuery` and pass it any options that fit your needs.
 * When your component renders, `useUpdateMetaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpdateMetaQuery({
 *   variables: {
 *      category: // value for 'category'
 *   },
 * });
 */
export function useUpdateMetaQuery(baseOptions?: Apollo.QueryHookOptions<UpdateMetaQuery, UpdateMetaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UpdateMetaQuery, UpdateMetaQueryVariables>(UpdateMetaDocument, options);
      }
export function useUpdateMetaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UpdateMetaQuery, UpdateMetaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UpdateMetaQuery, UpdateMetaQueryVariables>(UpdateMetaDocument, options);
        }
export type UpdateMetaQueryHookResult = ReturnType<typeof useUpdateMetaQuery>;
export type UpdateMetaLazyQueryHookResult = ReturnType<typeof useUpdateMetaLazyQuery>;
export type UpdateMetaQueryResult = Apollo.QueryResult<UpdateMetaQuery, UpdateMetaQueryVariables>;
export function refetchUpdateMetaQuery(variables?: UpdateMetaQueryVariables) {
      return { query: UpdateMetaDocument, variables: variables }
    }
export const CategoryChatSubDocument = gql`
    subscription CategoryChatSub($categoryId: Int!) {
  newMessage(categoryId: $categoryId) {
    id
    createdAt
    content
    sentBy {
      id
      username
    }
    category {
      id
      name
    }
  }
}
    `;

/**
 * __useCategoryChatSubSubscription__
 *
 * To run a query within a React component, call `useCategoryChatSubSubscription` and pass it any options that fit your needs.
 * When your component renders, `useCategoryChatSubSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryChatSubSubscription({
 *   variables: {
 *      categoryId: // value for 'categoryId'
 *   },
 * });
 */
export function useCategoryChatSubSubscription(baseOptions: Apollo.SubscriptionHookOptions<CategoryChatSubSubscription, CategoryChatSubSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<CategoryChatSubSubscription, CategoryChatSubSubscriptionVariables>(CategoryChatSubDocument, options);
      }
export type CategoryChatSubSubscriptionHookResult = ReturnType<typeof useCategoryChatSubSubscription>;
export type CategoryChatSubSubscriptionResult = Apollo.SubscriptionResult<CategoryChatSubSubscription>;
export const NewUserDocument = gql`
    subscription NewUser {
  newUser {
    id
    username
    email
  }
}
    `;

/**
 * __useNewUserSubscription__
 *
 * To run a query within a React component, call `useNewUserSubscription` and pass it any options that fit your needs.
 * When your component renders, `useNewUserSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewUserSubscription({
 *   variables: {
 *   },
 * });
 */
export function useNewUserSubscription(baseOptions?: Apollo.SubscriptionHookOptions<NewUserSubscription, NewUserSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<NewUserSubscription, NewUserSubscriptionVariables>(NewUserDocument, options);
      }
export type NewUserSubscriptionHookResult = ReturnType<typeof useNewUserSubscription>;
export type NewUserSubscriptionResult = Apollo.SubscriptionResult<NewUserSubscription>;