export const total = (income: number, expense: number) => {
  if (income == null && expense == null) {
    return;
  }

  let total = income - expense;

  return total;
};
