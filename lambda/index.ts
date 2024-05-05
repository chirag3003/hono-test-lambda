import "dotenv/config";
import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { logger } from "hono/logger";
import { env } from "hono/adapter";
import { db } from "../utills/db";
import { logg, users } from "../db/schema";
const app = new Hono();
const test = new Hono();
test.get("/test", (c) => c.text("Hello Test!"));
app.use(logger());
app.get("/", async (c) => {
  // await db.insert(users).values({ email: "Chirag", name: "Chirag", id: 1 });
  // await db;
  // console.log(env(c));
  const userList = await db.select().from(users);
  return c.json(userList, 200);
});

app.route("/test", test);

export const handler = handle(app);
