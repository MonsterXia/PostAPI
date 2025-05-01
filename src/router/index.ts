import { Hono } from "hono";
import { cors } from 'hono/cors'
import { csrf } from 'hono/csrf'
import { createFormLayerImporvment, getFormLayerImporvment, postSeedReserveSlot } from "../controllers";


const questionareRoute = new Hono();

questionareRoute.get("/layerimprovement", getFormLayerImporvment).post(createFormLayerImporvment);


const publicRoute = new Hono();
publicRoute.route("/questionare", questionareRoute);

// publicRoute.get("/", (c) => c.text("Hello World"))
// publicRoute.post("/", (c) => c.text("Hello World"))

const testRoute = new Hono();

const webhookRoute = new Hono();
webhookRoute.post("/reserve", postSeedReserveSlot)


const app = new Hono();
app.use('*',
  cors({
    origin: ['https://post.246801357.xyz', 'http://localhost:5173'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'All'],
    credentials: true,
    maxAge: 600,
  }),
  // csrf({
  //   origin: ['https://post.246801357.xyz', 'http://localhost:5173'],
  // })
);

app.route('/public', publicRoute);
app.route('/webhook', webhookRoute);
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

