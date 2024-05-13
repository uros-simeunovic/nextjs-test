import { db } from "@/lib/db";
import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { parse, subDays } from "date-fns";

const app = new Hono()
  .get(
    "/",
    zValidator(
      "query",
      z.object({
        from: z.string().optional(),
        to: z.string().optional(),
      })
    ),
    async (c) => {
      const { from, to } = c.req.valid("query");

      const defaultTo = new Date();
      const defaultFrom = subDays(defaultTo, 30);

      const startDate = from
        ? parse(from, "yyyy-MM-dd", new Date())
        : defaultFrom;
      const endDate = to ? parse(to, "yyyy-MM-dd", new Date()) : defaultTo;

      const data = await db.transaction.findMany({
        where: {
          date: {
            gte: startDate,
            lte: endDate,
          },
        },
        orderBy: {
          date: "desc",
        },
      });

      return c.json({ data });
    }
  )
  .get(
    "/:id",
    zValidator(
      "param",
      z.object({
        id: z.string(),
      })
    ),
    async (c) => {
      const param = c.req.valid("param");

      const data = await db.transaction.findUnique({
        where: {
          id: param.id,
        },
      });

      return c.json({ data });
    }
  )
  .post(
    "/",
    zValidator(
      "json",
      z.object({
        amount: z.number(),
        description: z.string(),
        categoryId: z.string(),
        date: z.string(),
      })
    ),
    async (c) => {
      const { amount, categoryId, date, description } = c.req.valid("json");

      const newTransaction = await db.transaction.create({
        data: {
          amount,
          date,
          categoryId,
          description,
        },
      });

      return c.json({
        message: "New transaction has been added",
        data: newTransaction,
      });
    }
  );

export default app;
