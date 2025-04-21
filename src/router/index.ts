import { Hono } from "hono";
import { createBattleGroupScore, getBattleGroupScore } from "../controllers";

const publicRoute = new Hono();

// publicRoute.get("/", (c) => c.text("Hello World"))
// publicRoute.post("/", (c) => c.text("Hello World"))

const testRoute = new Hono();
testRoute.post("/", createBattleGroupScore);
// testRoute.get("/", getBattleGroupScore);
// testRoute.post("/", createBattleGroupScore).get(getBattleGroupScore);

const app = new Hono();

app.route('/public', publicRoute);
app.route('/test', testRoute);

app.get("/", (c) => {
  return c.text("Hello World");
});

app.get("/hello", (c) => {
  return c.json({ message: "Hello, World!" });
});

app.get("/hello/:name", (c) => {
  const { name } = c.req.param();
  return c.json({ message: `Hello, ${name}!` });
});




export default app;

