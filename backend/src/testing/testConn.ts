import {
  EntityManager,
  MikroORM,
  ReflectMetadataProvider
} from "@mikro-orm/core"
import { PostgreSqlDriver } from "@mikro-orm/postgresql/PostgreSqlDriver"
import path from "path"
import { Base } from "../entities/Base"
import { Category } from "../entities/Category"
import { Comment } from "../entities/Comment"
import { Post } from "../entities/Post"
import { User } from "../entities/User"
import { Vote } from "../entities/Vote"

export const BASE_DIR = __dirname

export async function testConnection() {
  const orm = await MikroORM.init<PostgreSqlDriver>({
    metadataProvider: ReflectMetadataProvider,
    migrations: {
      path: path.join(__dirname, "../migrations"),
      pattern: /^[\w-]+\d+\.[tj]s$/
    },
    clientUrl: "postgres://postgres:postgres@127.0.0.1:5432/maple-testing",
    entities: [Base, Category, User, Post, Comment, Vote],
    baseDir: BASE_DIR,
    type: "postgresql",
    debug: true,
    logger: i => i,
    cache: { enabled: true }
  })

  return orm
}

export async function wipeDatabase(em: EntityManager) {
  await em.nativeDelete(Category, {})
  await em.nativeDelete(User, {})
  await em.nativeDelete(Post, {})
  await em.nativeDelete(Comment, {})
  await em.nativeDelete(Vote, {})
  em.clear()
}
