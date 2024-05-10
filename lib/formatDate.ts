import { DateRange } from "react-day-picker";

export const formatDate = (date: DateRange | undefined) => {
  const monthFrom = date?.from?.getMonth();
  const dayFrom = date?.from?.getDate();

  const monthTo = date?.to?.getMonth();
  const dayTo = date?.to?.getDate();

  return `${dayFrom}.${monthFrom}. - ${dayTo}.${monthTo}.`;
};
