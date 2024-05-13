import { z } from "zod";

export const Expense = z.object({
  amount: z.number(),
});
