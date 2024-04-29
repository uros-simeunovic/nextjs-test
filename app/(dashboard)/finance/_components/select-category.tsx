"use server";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { db } from "@/lib/db";

export const SelectCategory = async () => {
  const categories = await db.category.findMany();

  return (
    <div className="mt-2">
      <Label>Kategorija</Label>
      <Select name="category">
        <SelectTrigger>
          <SelectValue placeholder="Izaberi kategoriju" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
