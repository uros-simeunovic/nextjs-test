"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Minus, Plus } from "lucide-react";

interface Props {
  id: string;
  label: string;
  placeholder: string;
  setSign: (value: boolean) => void;
  sign: boolean;
  className?: string;
}
export const FormFinanceInput = forwardRef<HTMLInputElement, Props>(
  ({ id, label, placeholder, className, setSign, sign }, ref) => {
    return (
      <div className="relative">
        <Label htmlFor={id}>{label}</Label>
        <Input
          id={id}
          name={id}
          placeholder={`${placeholder}...`}
          className={cn("p-2 pl-10 ", className)}
          type="number"
          min={0}
          required
          ref={ref}
        />
        <div
          onClick={() => setSign(!sign)}
          className={`absolute top-[31px] left-2 rounded-sm w-6 h-6 ${
            sign ? "bg-green-600" : "bg-red-600"
          } hover:scale-105 transition-all duration-500 cursor-pointer flex items-center justify-center`}
        >
          {sign ? (
            <Plus color="white" className="w-5 transition-all duration-1000" />
          ) : (
            <Minus color="white" className="w-5 transition-all duration-1000" />
          )}
        </div>
      </div>
    );
  }
);
