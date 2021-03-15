import { graphql } from "graphql"
import { buildSchema } from "type-graphql"
import {
  CategoryResolver,
  CommentResolver,
  PostResolver,
  UserResolver,
  VoteResolver
} from "../resolvers"
import { testConnection } from "../utils/testConn"

interface Options {
  source: string
  variableValues?: any
  userId?: string
}

export const gCall = async ({ source, variableValues, userId }: Options) => {
  const orm = await testConnection()
  return graphql({
    source,
    variableValues,
    contextValue: {
      req: {
        session: {
          userId
        }
      },
      res: {},
      em: orm.em.fork()
    },
    schema: await buildSchema({
      resolvers: [
        PostResolver,
        UserResolver,
        VoteResolver,
        CategoryResolver,
        CommentResolver
      ]
    })
  })
}
