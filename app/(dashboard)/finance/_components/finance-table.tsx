"use server";

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
  const expenses = await db.transaction.findMany({
    include: {
      category: true,
    },
  });

  const transactionSum = await db.transaction.aggregate({
    _sum: {
      amount: true,
    },
  });

  return (
    <div>
      <h1 className="font-bold text-2xl ml-4 text-red-600">
        Trosak: {transactionSum._sum.amount}
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
                  <input
                    hidden
                    name="id"
                    id="id"
                    // value={expense.id}
                    defaultValue={expense.id}
                  />
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
