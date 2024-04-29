// import { PrismaClient } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const seed = async () => {
  const foodCategory = await db.category.create({
    data: {
      name: "Hrana",
    },
  });

  const fuelCategory = await db.category.create({
    data: {
      name: "Gorivo",
    },
  });

  const incomeCategory = await db.category.create({
    data: {
      name: "Dresovi",
    },
  });

  await db.expense.createMany({
    data: [
      {
        amount: 2000,
        description: "Dnevno tocenje goriva.",
        categoryId: fuelCategory.id,
      },
      {
        amount: 1300,
        description: "Dnevna kupovina namirnica.",
        categoryId: foodCategory.id,
      },
    ],
  });

  await db.income.createMany({
    data: [
      {
        amount: 5000,
        categoryId: incomeCategory.id,
        description: "Dresovi FK Backa",
      },
      {
        amount: 2000,
        categoryId: incomeCategory.id,
        description: "Usluga stampe",
      },
    ],
  });

  console.log("Database seeded successfully.");
};

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
