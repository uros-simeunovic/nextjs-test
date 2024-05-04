"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const deleteIncome = async (formData: FormData) => {
  const id = formData.get("id") as string;

  console.log(id);

  try {
    const response = await db.income.delete({
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
