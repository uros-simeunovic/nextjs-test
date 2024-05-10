"use client";

import { formatDate } from "@/lib/formatDate";
import { cn } from "@/lib/utils";
import { Expense } from "@prisma/client";
import { DateRange } from "react-day-picker";

export const Card = ({
  date,
  name,
  color,
  sum,
}: {
  date: DateRange | undefined;
  name: string;
  color: "red" | "green";
  sum: number | undefined;
}) => {
  return (
    <div className="w-[30%] bg-white rounded-md flex flex-row justify-between p-2">
      <div className="flex flex-col">
        <p className="text-muted-foreground text-sm">{formatDate(date)}</p>
        <h1 className={cn("text-2xl", `text-${color}-600`)}>{name}</h1>
      </div>
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">{sum} rsd</h1>
      </div>
    </div>
  );
};
