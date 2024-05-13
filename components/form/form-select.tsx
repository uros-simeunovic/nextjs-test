import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select";

export const SelectForm = () => {
  return (
    <Select>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Kategorije</SelectLabel>
          <SelectItem value="">Apple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
