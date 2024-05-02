import { z } from "zod";

export const DeleteExpense = z.object({
  id: z.string(),
});

export type expenseInput = z.infer<typeof DeleteExpense>;
