"use server";

import { db } from "@/lib/db";

interface ExpenseProps {
  date: string;
}

export const Expense = async () => {
  const startDate = "2024-02-01";
  const endDate = "2024-06-06";

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

  console.log(incomeSum, expenseSum);

  return (
    <div className="w-[30%] h-32 rounded-xl border shadow-md p-4">
      <h1 className="font-semibold text-xl">Expenses</h1>
    </div>
  );
};
