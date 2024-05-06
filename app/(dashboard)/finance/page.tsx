import { FormFinance } from "./_components/form-finance";
import { FinanceTable } from "./_components/finance-table";
import { Expense } from "./_components/expense";
import { Income } from "./_components/income";

const FinancePage = () => {
  return (
    <>
      {/* <FormFinance /> */}
      {/* <FinanceTable /> */}
      <Expense />
      <Income />
    </>
  );
};

export default FinancePage;
