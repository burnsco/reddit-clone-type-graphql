import { ContextType } from '../types'
import { Resolver, Query, Ctx, Mutation, Arg } from 'type-graphql'
import { User } from '../entities/User'
import argon2 from 'argon2'
import { RegisterInput } from './inputs/user-input'
import { UserResponse } from './response/user-response'
import { validateUser } from './validation/schemas'

@Resolver(() => User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { req, em }: ContextType) {
    if (!req.session.userId) {
      return null
    }
    const user = await em.findOne(User, req.session.userId)
    return user
  }

  @Query(() => [User], { nullable: true })
  users(@Ctx() { em }: ContextType): Promise<User[]> {
    return em.find(User, {})
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg('data') data: RegisterInput,
    @Ctx() { em, req }: ContextType
  ): Promise<UserResponse> {
    const errors = await validateUser(data)
    if (errors !== null) {
      return {
        errors
      }
    }

    const user = em.create(User, {
      email: data.email,
      username: data.username,
      password: await argon2.hash(data.password)
    })
    await em.persistAndFlush(user)

    req.session!.userId = user.id

    return {
      user
    }
  }
}
