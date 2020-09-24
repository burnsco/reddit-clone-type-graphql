import { Field, Int, ObjectType } from "type-graphql"

@ObjectType()
export class _QueryMeta {
  @Field(() => Int, { nullable: true})
  count: number
}
