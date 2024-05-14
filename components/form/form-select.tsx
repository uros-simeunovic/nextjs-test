import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldValues } from "react-hook-form";

type Props = {
  field: FieldValues;
  categoryOptions: {
    label: string;
    value: string;
  }[];
};

export const SelectForm = ({ categoryOptions, field }: Props) => {
  return (
    <Select>
      <SelectTrigger {...field}>
        <SelectValue placeholder="Izaberi kategoriju" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {categoryOptions.map((category, index) => (
            <SelectItem value={category.value} key={index}>
              {category.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
