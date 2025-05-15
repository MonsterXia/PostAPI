/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Bind resources to your worker in `wrangler.jsonc`. After adding bindings, a type definition for the
 * `Env` object can be regenerated with `npm run cf-typegen`.
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
import app from "./router";

export interface Env {
  DB: D1Database;
  post_api: KVNamespace;
  POST_SERVER_HOST: string,
  POST_SERVER_PORT: number,
  POST_SERVER_PASSWORD: string,
  RESEND_EMAIL_API_KEY: string,
  POST_WEB_DOMAIN: string,
  JWT_SECRET: string,
}

export default app satisfies ExportedHandler<Env>;
