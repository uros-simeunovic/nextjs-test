import { db } from "@/lib/db";
import { Hono } from "hono";

const app = new Hono().get("/", async (c) => {
  const data = await db.category.findMany();

  return c.json({ data });
});

export default app;
