import { z } from "zod";

export const CreateExpense = z.object({
  amount: z
    .number({
      required_error: "Polje iznos je obavezno",
      invalid_type_error: "Polje iznos je obavezno",
    })
    .positive(),
  description: z.string().optional(),
  categoryId: z.string(),
});

export type expenseInput = z.infer<typeof CreateExpense>;
