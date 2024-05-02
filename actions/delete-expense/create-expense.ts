"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const createExpense = async (formData: FormData) => {
  const response = await db.expense.delete({
    where: {
      id: "dasdas",
    },
  });

  console.log(response);

  revalidatePath("/finance");
};
