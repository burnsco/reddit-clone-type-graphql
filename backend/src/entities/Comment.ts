import { Cascade, Entity, ManyToOne, Property } from "@mikro-orm/core"
import { Field, ObjectType } from "type-graphql"
import { Base } from "./Base"
import { Post } from "./Post"
import { User } from "./User"

@Entity()
@ObjectType()
export class Comment extends Base<Comment> {
  @Field(() => String)
  @Property()
  body: string

  @Field(() => User)
  @ManyToOne(() => User, { onDelete: "cascade" })
  createdBy: User

  @Field(() => Post, { nullable: true })
  @ManyToOne(() => Post, {
    cascade: [Cascade.ALL]
  })
  post: Post
}
