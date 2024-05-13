"use client";

import { DatePickerWithRange } from "@/components/date-picker-range";
import { Card } from "./card";
import { useDate } from "@/hooks/use-date";
import { DateRange } from "react-day-picker";
import { useGetTransactions } from "@/hooks/api/use-get-transactions";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useNewTransaction } from "@/hooks/use-new-transaction";

export const Dashboard = () => {
  const { date, setDate } = useDate();
  const { data } = useGetTransactions();

  const { onOpen } = useNewTransaction();

  const router = useRouter();
  const pathname = usePathname();

  const onDateSelect = async (dateRange: DateRange | undefined) => {
    setDate(dateRange);

    router.push(
      `${pathname}/?from=${date?.from?.toISOString().split("T")[0]}&to=${
        date?.to?.toISOString().split("T")[0]
      }`
    );
  };

  return (
    <div className="space-y-6">
      <DatePickerWithRange onSelect={onDateSelect} date={date} />
      <Card date={date} name="Troskovi" color="red" />
      <Button onClick={onOpen}>Add new transaction</Button>
    </div>
  );
};
