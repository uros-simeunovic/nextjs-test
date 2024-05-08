import { addDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export const useDate = () => {
  const [date, setDate] = useState<DateRange | undefined>({
    from: addDays(new Date(Date.now()), -30),
    to: new Date(Date.now()),
  });

  return {
    date,
    setDate,
  };
};
