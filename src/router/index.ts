import { Hono } from "hono";
import { cors } from 'hono/cors'
import { csrf } from 'hono/csrf'
import { jwt } from 'hono/jwt'
import type { JwtVariables } from 'hono/jwt'
import { createFormLayerImporvment, deleteAdmins, getAllAdmins, getFormLayerImporvment, MailSendingTest, postSeedReserveSlot, RCONResult, serverAdminLogin, ServerAdminRegister, ServerAdminValidation, ServerStatus, TryKVRead, TryKVWrite, validNameCheck } from "../controllers";
import { authMiddleware } from "@/middlewares";
import { Context } from "hono";

type Variables = JwtVariables

const questionareRoute = new Hono();

questionareRoute.get("/layerimprovement", getFormLayerImporvment).post(createFormLayerImporvment);

const registerRoute = new Hono();
registerRoute.post("/valid-email", validNameCheck);
registerRoute.post("/init", ServerAdminRegister)
registerRoute.post("/validate", ServerAdminValidation);

const adminRoute = new Hono<{ Variables: Variables }>()
adminRoute.post("login", serverAdminLogin)
adminRoute.use("/*", authMiddleware);
// adminRoute.post("/login", (c: Context) => {
//   const info = c.get('jwt-payload');
//   return c.json({ 
//     message: info
//   });
// })

const publicRoute = new Hono();
publicRoute.route("/questionare", questionareRoute);
publicRoute.route("/register", registerRoute);

// publicRoute.get("/", (c) => c.text("Hello World"))
// publicRoute.post("/", (c) => c.text("Hello World"))

const testRoute = new Hono();
testRoute.get("/rcon", RCONResult)
testRoute.get("/status", ServerStatus)
// testRoute.post("/email-valid", validNameCheck)
// testRoute.post("/kv", TryKVWrite)
// testRoute.get("/kv/:key", TryKVRead)
// testRoute.post("/email", MailSendingTest)
// testRoute.get("/admins", getAllAdmins)
// testRoute.delete("/admin/:username", async (c, next) => {
//   console.log('DELETE /admin/:username hit with username:', c.req.param("username"));
//   await next();
// }, deleteAdmins)

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
  csrf({
    origin: ['https://post.246801357.xyz', 'http://localhost:5173'],
  })
);

app.route('/public', publicRoute);
app.route('/webhook', webhookRoute);
app.route('/test', testRoute);
app.route('/admin', adminRoute);

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

