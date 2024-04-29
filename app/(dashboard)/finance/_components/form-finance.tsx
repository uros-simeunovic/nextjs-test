import { createExpense } from "@/actions/create-expense/create-expense";
import { FormFinanceInput } from "@/components/form/form-finance-input";
import { SelectCategory } from "./select-category";
import { FormSubmit } from "@/components/form/form-submit";
import { FormInput } from "@/components/form/form-input";

export const FormFinance = async () => {
  return (
    <form action={createExpense} className="space-y-3">
      {/* <FormFinanceInput
        id="iznos"
        label="Iznos"
        placeholder="Iznos"
        setSign={setSign}
        sign={sign}
      /> */}
      <FormInput id="iznos" label="Iznos" placeholder="Iznos" />
      <FormInput id="description" label="Opis" placeholder="Usluga stampe" />
      <SelectCategory />
      <FormSubmit>Submit</FormSubmit>
    </form>
  );
};
