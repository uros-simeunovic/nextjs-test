"use client";

import { DatePickerWithRange } from "@/components/date-picker-range";
import { useDate } from "@/hooks/use-date";
import { Expense } from "./expense";
import { useEffect } from "react";

export const Dashboard = () => {
  const { date } = useDate();

  useEffect(() => {
    console.log(date);
  }, [date]);

  return (
    <div className="space-y-6">
      <DatePickerWithRange />
      {/* <FormFinance /> */}
      {/* <FinanceTable /> */}

      {/* <Expense startDate="2024-01-01" endDate="2024-05-05" /> */}
      {/* <Income startDate="2024-01-01" endDate="2024-05-05" /> */}
    </div>
  );
};
