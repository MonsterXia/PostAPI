import { Hono } from "hono";
import { cors } from 'hono/cors'
import { createBattleGroupLayerScore, createBattleGroupScore, getFormLayerImporvment } from "../controllers";

const questionareGenerateRoute = new Hono();
questionareGenerateRoute.get("/layerimprovement", getFormLayerImporvment);


const questionareSubmitRoute = new Hono();
questionareSubmitRoute.post("/battlegroup", createBattleGroupScore);
questionareSubmitRoute.post("/layeracceptance", createBattleGroupLayerScore);


const questionareRoute = new Hono();
questionareRoute.route("/generate", questionareGenerateRoute);
questionareRoute.route("/submit", questionareSubmitRoute);


// questionareRoute.get("/battlegroup", getBattleGroupScore);

const publicRoute = new Hono();
publicRoute.route("/questionare", questionareRoute);

// publicRoute.get("/", (c) => c.text("Hello World"))
// publicRoute.post("/", (c) => c.text("Hello World"))

const testRoute = new Hono();
testRoute.post("/", createBattleGroupScore);
// testRoute.get("/", getBattleGroupScore);
// testRoute.post("/", createBattleGroupScore).get(getBattleGroupScore);

const app = new Hono();
app.use('*', cors({
  origin: ['https://post.246801357.com', 'http://localhost:5173', 'https://api.post.246801357.com'],
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 600,
}));

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

