import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { DateRange } from "react-day-picker";
import { date } from "zod";

export async function GET(req: Request) {
  const searchParams = new URLSearchParams(new URL(req.url).searchParams);

  console.log({
    gte: new Date(searchParams.get("from") as string),
    lte: new Date(searchParams.get("to") as string),
  });

  const data = await db.$transaction([
    db.expense.findMany({
      where: {
        createdAt: {
          gte: new Date(searchParams.get("from") as string),
          lte: new Date(searchParams.get("to") as string),
        },
      },
    }),
    db.income.findMany({
      where: {
        createdAt: {
          gte: new Date(searchParams.get("from") as string),
          lte: new Date(searchParams.get("to") as string),
        },
      },
    }),
  ]);

  console.log(data);

  try {
    return NextResponse.json("dasda", { status: 200 });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}
