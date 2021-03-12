import { GraphQLEmail } from "graphql-custom-types"
import { Field, InputType } from "type-graphql"
import { User } from "../entities"

@InputType()
export default class LoginInput implements Partial<User> {
  @Field(() => GraphQLEmail, { nullable: true })
  email: string

  @Field(() => String, { nullable: true })
  password: string
}
