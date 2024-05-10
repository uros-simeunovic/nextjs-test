"use client";

import { DatePickerWithRange } from "@/components/date-picker-range";
import { Card } from "./card";
import { useDate } from "@/hooks/use-date";
import { DateRange } from "react-day-picker";
import { getExpenses, getExpensesSum, getIncomesSum } from "@/actions/actions";
import { useState } from "react";
import { Expense } from "@prisma/client";
import { addDays } from "date-fns";

export const Dashboard = () => {
  const { date, setDate } = useDate();

  const [expenseSum, setExpenseSum] = useState<number>();
  const [incomeSum, setIncomeSum] = useState<number>();

  const onDateSelect = async (dateRange: DateRange | undefined) => {
    setDate(dateRange);
    const expenseSum: number | undefined = await getExpensesSum(dateRange);

    const incomeSum: number | undefined = await getIncomesSum(dateRange);

    if (expenseSum) {
      setExpenseSum(expenseSum);
      setIncomeSum(incomeSum);
    }
  };

  return (
    <div className="space-y-6">
      <DatePickerWithRange onSelect={onDateSelect} date={date} />
      <Card date={date} name="Troskovi" color="red" sum={expenseSum} />
      <Card date={date} name="Prihod" color="green" sum={incomeSum} />
    </div>
  );
};
