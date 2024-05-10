"use server";

import { db } from "@/lib/db";
import { DateRange } from "react-day-picker";

export const getExpenses = async (dateRange: DateRange | undefined) => {
  console.log("Fetching expenses");
  try {
    const expenses = await db.expense.findMany({
      where: {
        createdAt: {
          gte: dateRange?.from,
          lte: dateRange?.to,
        },
      },
    });

    return expenses;
  } catch (error) {
    // return ;
  }
};

export const getExpensesSum = async (dateRange: DateRange | undefined) => {
  console.log("Fetching expenses sum");
  try {
    const expensesSum = await db.expense.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        createdAt: {
          gte: dateRange?.from,
          lte: dateRange?.to,
        },
      },
    });

    return expensesSum._sum.amount as number;
  } catch (error) {
    // return { error: "Could not fetch expenses sum" };
  }
};

export const getIncomesSum = async (dateRange: DateRange | undefined) => {
  console.log("Fetching incomes sum");
  try {
    const incomeSum = await db.income.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        createdAt: {
          gte: dateRange?.from,
          lte: dateRange?.to,
        },
      },
    });

    return incomeSum._sum.amount as number;
  } catch (error) {
    // return { error: "Could not fetch expenses sum" };
  }
};
