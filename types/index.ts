import { z } from "zod";

export const Transaction = z.object({
  amount: z.number(),
  date: z.string(),
  description: z.string(),
  categoryId: z.string(),
});

export type FormValues = z.input<typeof Transaction>;
