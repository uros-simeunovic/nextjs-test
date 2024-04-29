import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { Expense } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const expenses = await db.expense.findMany();

  return NextResponse.json(expenses);
}

export async function POST(req: NextRequest) {
  const { userId } = auth();

  console.log(userId);

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const response: Expense = await req.json();

  const createdExpense = await db.expense.create({
    data: {
      ...response,
      accountId: userId,
    },
  });
  return NextResponse.json(createdExpense);
}
