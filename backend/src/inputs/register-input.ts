import { GraphQLEmail } from "graphql-custom-types"
import { Field, InputType } from "type-graphql"
import { User } from "../entities"

@InputType()
export default class RegisterInput implements Partial<User> {
  @Field(() => GraphQLEmail)
  email: string

  @Field(() => String)
  username: string

  @Field()
  password: string

  @Field(() => String, { nullable: true })
  avatar?: string

  @Field(() => String, { nullable: true })
  about?: string
}
