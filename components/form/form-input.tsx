import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface Props {
  id: string;
  label: string;
  placeholder?: string;
  className?: string;
}
export const FormInput = forwardRef<HTMLInputElement, Props>(
  ({ id, label, placeholder, className }, ref) => {
    return (
      <div>
        <Label htmlFor={id} className="text-white">
          {label}
        </Label>
        <Input
          id={id}
          name={id}
          placeholder={`${placeholder}...`}
          className={cn("p-2", className)}
          ref={ref}
        />
      </div>
    );
  }
);
