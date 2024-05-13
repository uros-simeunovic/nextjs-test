import { FormValues, Transaction } from "@/types";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Props = {
  id?: string;
  defaultValues?: FormValues;
  onSubmit: (values: FormValues) => void;
  onDelete?: () => void;
  disabled?: boolean;
  categoryOptions: {
    label: string;
    value: string;
  }[];
};

export const TransactionForm = ({
  id,
  defaultValues,
  onSubmit,
  onDelete,
  disabled,
  categoryOptions,
}: Props) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(Transaction),
    defaultValues: defaultValues,
  });

  const handleSubmit = (values: FormValues) => {
    console.log({ values });
  };

  const handleDelete = () => {
    onDelete?.();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-4 pt-4"
      >
        <FormField
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Novac</FormLabel>
              <FormControl>
                <Input
                  disabled={disabled}
                  placeholder="Kolicina novca..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Opis</FormLabel>
              <FormControl>
                <Input
                  disabled={disabled}
                  placeholder="Opis transakcije..."
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button>Dodaj transakciju</Button>
      </form>
    </Form>
  );
};
