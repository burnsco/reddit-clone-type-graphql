import { ApolloServer } from "apollo-server-express"
import "dotenv-safe/config"
import http from "http"
import "reflect-metadata"
import { buildSchema } from "type-graphql"
import {
  initializeDB,
  initializeExpress,
  initializeLogger,
  initializeRedis
} from "./config"
import { User } from "./entities"
import { resolversArray } from "./resolvers/resolvers"
import { ContextType2 } from "./types"
import { wipeDatabase } from "./utils"

async function main(): Promise<void> {
  const { orm } = await initializeDB()
  await wipeDatabase(orm.em)
  const { app } = initializeExpress()
  const { redisClient, pubSub } = initializeRedis()

  let userId: any

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: resolversArray,
      validate: false,
      pubSub
    }),
    context: async ({ req, res }: ContextType2) => {
      if (req && req.session && req.session.userId) {
        userId = req.session.userId
        return {
          em: orm.em.fork(),
          req,
          res,
          redis: redisClient
        }
      } else {
        return {
          em: orm.em.fork(),
          req,
          res,
          redis: redisClient
        }
      }
    },
    subscriptions: {
      path: "/subscriptions",
      onConnect: async () => {
        try {
          const connectedUser = await orm.em.findOne(User, { id: userId })

          if (!connectedUser) {
            throw new Error("missing userID")
          }

          connectedUser.online = true
          await orm.em.flush()

          console.log(
            `User - ${connectedUser.username} has connected to subscription server`
          )
        } catch (ex) {
          console.log("exception")
          console.log(ex)
        }
      },
      onDisconnect: async () => {
        try {
          const connectedUser = await orm.em.findOne(User, { id: userId })

          if (!connectedUser) {
            throw new Error("missing userID")
          }

          connectedUser.online = false
          await orm.em.flush()

          console.log(
            `User - ${connectedUser.username} has disconnected to subscription server`
          )
        } catch (ex) {
          console.log("exception")
          console.log(ex)
        }
      }
    }
  })
  server.applyMiddleware({ app, cors: false })

  const httpServer = http.createServer(app)
  server.installSubscriptionHandlers(httpServer)

  httpServer.listen(process.env.PORT, () => {
    console.log(
      `🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`
    )
    console.log(
      `🚀 Subscriptions ready at ws://localhost:${process.env.PORT}${server.subscriptionsPath}`
    )
  })
}

const { logger } = initializeLogger()

main().catch((err: any) => {
  logger.log({ level: "error", message: err.message })
})
