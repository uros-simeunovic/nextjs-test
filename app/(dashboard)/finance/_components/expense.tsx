"use server";

import { db } from "@/lib/db";

interface ExpenseProps {
  startDate: string;
  endDate: string;
}

export const Expense = async ({ endDate, startDate }: ExpenseProps) => {
  const [expenses, incomes, expenseSum, incomeSum] = await db.$transaction([
    db.expense.findMany({
      where: {
        createdAt: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
    }),
    db.income.findMany({
      where: {
        createdAt: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
    }),
    db.expense.aggregate({
      where: {
        createdAt: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
      _sum: {
        amount: true,
      },
    }),
    db.income.aggregate({
      where: {
        createdAt: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
      _sum: {
        amount: true,
      },
    }),
  ]);

  // console.log(expenses);

  return (
    <div className="max-w-[400px] h-20 rounded-xl border shadow-md p-4 bg-white flex flex-row items-center justify-between">
      <div>
        <p className="text-muted-foreground text-sm">
          {startDate.split("-")[1]}.{startDate.split("-")[2]}. -{" "}
          {endDate.split("-")[1]}.{endDate.split("-")[2]}.
        </p>
        <h1 className="font-bold text-2xl text-red-600">Troskovi</h1>
      </div>
      <h1 className="font-bold text-4xl">{expenseSum._sum.amount} rsd</h1>
    </div>
  );
};
