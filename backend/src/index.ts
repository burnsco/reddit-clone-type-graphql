import { MikroORM } from '@mikro-orm/core'
import { ApolloServer } from 'apollo-server-express'
import connectRedis from 'connect-redis'
import cors from 'cors'
import express from 'express'
import session from 'express-session'
import redis from 'redis'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import MikroConfig from './mikro-orm.config'
import { CategoryResolver } from './resolvers/category-resolver'
import { CommentResolver } from './resolvers/comment-resolver'
import { PostResolver } from './resolvers/post-resolver'
import { UserResolver } from './resolvers/user-resolver'
import { VoteResolver } from './resolvers/vote-resolver'

const main = async () => {
  const orm = await MikroORM.init(MikroConfig)
  await orm.getMigrator().up()

  const app = express()

  const redisStore = connectRedis(session)
  const redisClient = redis.createClient()

  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true
    })
  )
  app.use(
    session({
      name: 'qid',
      store: new redisStore({
        client: redisClient,
        disableTouch: true
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        httpOnly: true,
        sameSite: 'lax',
        secure: false
      },
      saveUninitialized: false,
      secret: 'qowiueojwojfalksdjoqiwueo',
      resave: false
    })
  )

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        PostResolver,
        UserResolver,
        VoteResolver,
        CategoryResolver,
        CommentResolver
      ],
      validate: false
    }),
    context: ({ req, res }) => ({ em: orm.em.fork(), req, res })
  })

  apolloServer.applyMiddleware({ app, cors: false })

  app.listen(4000, () => {
    console.log('server started on port 4000')
  })
}

main().catch(err => {
  console.log(err)
})