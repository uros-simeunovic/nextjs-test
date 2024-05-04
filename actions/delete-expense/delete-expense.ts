"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteExpense = async (formData: FormData) => {
  const id = formData.get("id") as string;

  console.log(id);

  try {
    const response = await db.expense.delete({
      where: {
        id,
      },
    });

    console.log(response);

    revalidatePath("/finance");
  } catch (error) {
    console.log(error);
  }
};
