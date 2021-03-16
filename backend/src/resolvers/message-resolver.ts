import { Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql"
import { Category, Message, User } from "../entities"
import { ContextType } from "../types"

@Resolver(() => Message)
export default class MessageResolver {
  @Query(() => Message, { nullable: true })
  async message(@Ctx() { em, req }: ContextType): Promise<Message> {
    return await em.findOneOrFail(Message, {
      sentBy: { id: req.session.userId }
    })
  }

  @Query(() => [Message], { nullable: true })
  async messages(@Ctx() { em }: ContextType): Promise<Message[] | null> {
    return await em.find(Message, {})
  }

  @FieldResolver(() => Category)
  async category(
    @Root() message: Message,
    @Ctx() { em }: ContextType
  ): Promise<Category> {
    return await em.findOneOrFail(Category, message.category)
  }

  @FieldResolver()
  async sentBy(
    @Root() message: Message,
    @Ctx() { em }: ContextType
  ): Promise<User> {
    return await em.findOneOrFail(User, message.sentBy.id)
  }
}
