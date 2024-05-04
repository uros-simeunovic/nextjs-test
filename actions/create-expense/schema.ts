import { z } from "zod";

export const CreateExpense = z.object({
  amount: z
    .number({
      required_error: "Polje iznos je obavezno",
      invalid_type_error: "Polje iznos je obavezno",
    })
    .positive({ message: "Broj mora biti pozitivan" }),
  description: z.string().optional(),
  categoryId: z.string(),
});

export type expense = z.infer<typeof CreateExpense>;
