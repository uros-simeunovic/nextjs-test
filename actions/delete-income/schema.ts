import { z } from "zod";

export const DeleteIncome = z.object({
  id: z.string(),
});

export type expenseInput = z.infer<typeof DeleteIncome>;
