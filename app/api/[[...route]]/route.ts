import { Hono } from "hono";
import { handle } from "hono/vercel";

import transactions from "./transactions";
import categories from "./categories";

export const runtime = "nodejs";

const app = new Hono().basePath("/api");

const routes = app
  .route("/transactions", transactions)
  .route("/categories", categories);

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
