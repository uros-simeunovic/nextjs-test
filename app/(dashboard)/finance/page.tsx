"use client";

import { FormFinanceInput } from "@/components/form/form-finance-input";
import { FormSubmit } from "@/components/form/form-submit";
import { ElementRef, useRef, useState } from "react";

const FinancePage = () => {
  const [sign, setSign] = useState(true);
  const inputRef = useRef<ElementRef<"input">>(null);

  const onSubmit = (formData: FormData) => {
    const iznos = formData.get("iznos") as string;
    console.log(sign ? iznos : "-" + iznos);
  };

  return (
    <form action={onSubmit} className="space-y-2">
      <FormFinanceInput
        id="iznos"
        label="Iznos"
        placeholder="Iznos"
        setSign={setSign}
        sign={sign}
        ref={inputRef}
      />
      <FormSubmit>Submit</FormSubmit>
    </form>
  );
};

export default FinancePage;
