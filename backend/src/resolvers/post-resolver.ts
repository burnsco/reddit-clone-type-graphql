import {
  Arg,
  Args,
  Ctx,
  FieldResolver,
  Mutation,
  Query,
  Resolver,
  Root
} from 'type-graphql'
import { invalidPostOrId } from '../constants'
import { Category } from '../entities/Category'
import { Comment } from '../entities/Comment'
import { Post } from '../entities/Post'
import { User } from '../entities/User'
import { Vote } from '../entities/Vote'
import { ContextType } from '../types'
import { capitalizeFirstLetter } from '../utils/capitalize'
import { PostArgs } from './args/post-args'
import { CommentInput } from './inputs/comment-input'
import { PostInput } from './inputs/post-input'
import { VoteInput } from './inputs/vote-input'
import { CommentMutationResponse } from './response/comment-response'
import {
  PostMutationResponse,
  PostsQueryResponse
} from './response/post-response'
import { VoteMutationResponse } from './response/vote-response'

@Resolver(() => Post)
export class PostResolver {
  @Query(() => Post, { nullable: true })
  post(@Arg('postId') postId: number, @Ctx() { em }: ContextType) {
    return em.findOne(Post, postId)
  }

  @Query(() => PostsQueryResponse)
  async allPosts(
    @Args() data: PostArgs,
    @Ctx() { em }: ContextType
  ): Promise<PostsQueryResponse> {
    const [posts, count] = await em.findAndCount(
      Post,
      {},
      { limit: data.limit, offset: data.offset }
    )

    return {
      posts,
      offset: posts.length,
      totalPosts: count
    }
  }

  @Query(() => [Post], { nullable: true })
  async postsByCategory(
    @Ctx() { em }: ContextType,
    @Arg('category') category: string
  ): Promise<Post[] | null> {
    const posts = await em.find(Post, {
      category: { name: capitalizeFirstLetter(category) }
    })
    return posts
  }

  @Mutation(() => PostMutationResponse)
  async createPost(
    @Arg('data') data: PostInput,
    @Ctx() { em, req }: ContextType
  ): Promise<PostMutationResponse> {
    const post = em.create(Post, {
      title: data.title,
      author: em.getReference(User, req.session.userId),
      category: em.getReference(Category, data.categoryId)
    })

    await em.persistAndFlush(post)

    return {
      post
    }
  }

  @Mutation(() => CommentMutationResponse)
  async createComment(
    @Arg('data') { body, postId }: CommentInput,
    @Ctx() { em, req }: ContextType
  ): Promise<CommentMutationResponse> {
    const post = await em.findOne(Post, postId, {
      populate: ['comments']
    })

    if (!post) {
      return invalidPostOrId
    }

    const comment = em.create(Comment, {
      post,
      body: body,
      createdBy: em.getReference(User, req.session.userId)
    })
    post.comments.add(comment)

    await em.persistAndFlush(post)

    return {
      comment
    }
  }

  @Mutation(() => VoteMutationResponse)
  async vote(
    @Arg('data') { postId, value }: VoteInput,
    @Ctx() { em, req }: ContextType
  ): Promise<VoteMutationResponse> {
    const post = await em.findOne(Post, postId, {
      populate: ['votes']
    })

    if (!post) {
      return invalidPostOrId
    }

    const vote = em.create(Vote, {
      post,
      value,
      castBy: em.getReference(User, req.session.userId)
    })

    post.votes.add(vote)

    await em.persistAndFlush(post)

    return {
      vote
    }
  }

  @FieldResolver({ nullable: true })
  async comments(@Root() post: Post, @Ctx() { em }: ContextType) {
    return await em.find(Comment, { post: { id: post.id } })
  }
  @FieldResolver({ nullable: true })
  async votes(@Root() post: Post, @Ctx() { em }: ContextType) {
    return await em.find(Vote, { post: { id: post.id } })
  }
  @FieldResolver({ nullable: true })
  async author(
    @Root() post: Post,
    @Ctx() { em }: ContextType
  ): Promise<User | null> {
    return await em.findOneOrFail(User, post.author.id)
  }
  @FieldResolver({ nullable: true })
  async category(
    @Root() post: Post,
    @Ctx() { em }: ContextType
  ): Promise<Category | null> {
    return await em.findOneOrFail(Category, post.category.id)
  }
}
