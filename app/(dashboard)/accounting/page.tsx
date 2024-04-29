"use client";

import { FormInput } from "@/components/form/form-input";
import { ElementRef, useRef, useState } from "react";
import { DocPreview } from "../_components/doc-preview";
import { Button } from "@/components/ui/button";
import { FormSubmit } from "@/components/form/form-submit";

const AccountingPage = () => {
  const [kupac, setKupac] = useState("");
  const [adresa, setAdresa] = useState("");

  const inputRef = useRef<ElementRef<"input">>(null);

  const onSubmit = (formData: FormData) => {
    setKupac(formData.get("kupac") as string);
    setAdresa(formData.get("adresa") as string);
  };

  return (
    <div className="flex flex-row space-x-32">
      <form action={onSubmit} className="space-y-2">
        <FormInput
          id="kupac"
          label="Kupac"
          placeholder="Ime kupca"
          ref={inputRef}
        />
        <FormInput
          id="adresa"
          label="Adresa"
          placeholder="Mesto, adresa"
          ref={inputRef}
        />
        <FormSubmit>Submit</FormSubmit>
      </form>
      {/* TODO: Document preview */}
      {/* <div>
        <DocPreview kupac={kupac} adresa={adresa} />
      </div> */}
    </div>
  );
};

export default AccountingPage;
