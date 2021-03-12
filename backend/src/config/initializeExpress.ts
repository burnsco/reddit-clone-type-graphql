import cors from "cors"
import "dotenv-safe/config"
import express from "express"
import session from "express-session"
import "reflect-metadata"
import { COOKIE_NAME, __prod__ } from "../entities/common/constants"
import { initializeRedis } from "./redisConfig"

export const initializeExpress = () => {
  const { redisStore, redisClient } = initializeRedis()

  const app = express()

  app.set("trust proxy", 1)
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN,
      credentials: true
    })
  )
  app.use(
    session({
      name: COOKIE_NAME,
      store: new redisStore({
        client: redisClient,
        disableTouch: true
      }),
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
        httpOnly: true,
        sameSite: "lax",
        secure: __prod__,
        domain: __prod__ ? "reddit-clone.com" || ".vercel.app" : undefined
      },
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET,
      resave: false
    })
  )

  return { app }
}
