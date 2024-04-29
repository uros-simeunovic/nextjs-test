"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const createExpense = async (formData: FormData) => {
  const amount = parseInt(formData.get("iznos") as string);
  const categoryId = formData.get("category") as string;
  const description = formData.get("description") as string;

  const response = await db.expense.create({
    data: {
      amount,
      categoryId,
      description,
    },
  });

  console.log(response);

  revalidatePath("/finance");
};
