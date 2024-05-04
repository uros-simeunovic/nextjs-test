import { deleteExpense } from "@/actions/delete-expense/delete-expense";
import { deleteIncome } from "@/actions/delete-income/delete-income";
import { FormSubmit } from "@/components/form/form-submit";
import { Modal } from "@/components/modal/modal";

import {
  Table,
  TableBody,
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

  const expenseSum = await db.expense.aggregate({
    _sum: {
      amount: true,
    },
  });

  const incomeSum = await db.income.aggregate({
    _sum: {
      amount: true,
    },
  });

  return (
    <div>
      <h1 className="font-bold text-2xl ml-4 text-green-600">
        Prihod: {expenseSum._sum.amount}
      </h1>
      <Table className="w-[800px] mb-8">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Kategorija</TableHead>
            <TableHead className="w-[250px]">Opis</TableHead>
            <TableHead>Datum</TableHead>
            <TableHead>Vrednost</TableHead>
            <TableHead className="text-center">Akcije</TableHead>
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
              <TableCell>{expense.amount}</TableCell>
              <TableCell className="text-center">
                <form action={deleteExpense}>
                  <input hidden name="id" id="id" value={expense.id} />
                  <FormSubmit variant="destructive">Izbrisi</FormSubmit>
                </form>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal />
      <h1 className="font-bold text-2xl ml-4 text-red-600">
        Troskovi: {incomeSum._sum.amount}
      </h1>
      <Table className="w-[800px]">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Kategorija</TableHead>
            <TableHead className="w-[250px]">Opis</TableHead>
            <TableHead>Datum</TableHead>
            <TableHead>Vrednost</TableHead>
            <TableHead className="text-center">Akcije</TableHead>
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
              <TableCell>{income.amount}</TableCell>
              <TableCell className="text-center">
                <form action={deleteIncome}>
                  <input hidden name="id" id="id" value={income.id} />
                  <FormSubmit variant="destructive">Izbrisi</FormSubmit>
                </form>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Modal />
    </div>
  );
};
