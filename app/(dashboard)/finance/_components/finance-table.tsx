import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/lib/db";

export const FinanceTable = async () => {
  const expenses = await db.expense.findMany({
    include: {
      category: true,
    },
  });

  const incomes = await db.income.findMany({
    include: {
      category: true,
    },
  });

  // console.log({ expenses, incomes });

  console.log(new Date(incomes[1].createdAt).toLocaleDateString("en-GB"));

  return (
    <div>
      <Table className="w-[500px]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Kategorija</TableHead>
            <TableHead>Opis</TableHead>
            <TableHead>Datum</TableHead>
            <TableHead className="text-right">Vrednost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow key={expense.id}>
              <TableCell className="font-medium">
                {expense.category.name}
              </TableCell>
              <TableCell>{expense.description}</TableCell>
              <TableCell>
                {expense.createdAt.toLocaleDateString("en-GB")}
              </TableCell>
              <TableCell className="text-right">{expense.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Table className="w-[500px]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Kategorija</TableHead>
            <TableHead>Opis</TableHead>
            <TableHead>Datum</TableHead>
            <TableHead className="text-right">Vrednost</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {incomes.map((income) => (
            <TableRow key={income.id}>
              <TableCell className="font-medium">
                {income.category.name}
              </TableCell>
              <TableCell>{income.description}</TableCell>
              <TableCell>
                {income.createdAt.toLocaleDateString("en-GB")}
              </TableCell>
              <TableCell className="text-right">{income.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
