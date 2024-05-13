"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { CreateExpense } from "./schema";

export const createExpense = async (formData: FormData) => {
  const amount = parseInt(formData.get("iznos") as string);
  const categoryId = formData.get("category") as string;
  const description = formData.get("description") as string;
  const date = new Date("2024-05-06");

  const validatedExpense = CreateExpense.safeParse({
    amount,
    categoryId,
    description,
    date,
  });

  if (!validatedExpense.success) {
    return {
      fieldErrors: validatedExpense.error.flatten().fieldErrors,
    };
  }

  const response = await db.transaction.create({
    data: {
      amount,
      categoryId,
      description,
      date,
    },
  });

  console.log(response);

  revalidatePath("/finance");
};
