import { Hono } from "hono";
import { handle } from "hono/aws-lambda";
import { logger } from "hono/logger";
const app = new Hono();
const test = new Hono();
test.get("/test", (c) => c.text("Hello Test!"));
app.use(logger());
app.get("/", (c) => {
  return c.text("Hello Chirag!", 404);
});

app.route("/test", test);

export const handler = handle(app);
