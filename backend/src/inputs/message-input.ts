import { Field, ID, InputType } from "type-graphql"
import { Message } from "../entities"

@InputType()
export default class MessageInput implements Partial<Message> {
  @Field()
  content: string

  @Field(() => ID)
  categoryId: number
}
