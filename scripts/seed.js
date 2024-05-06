// import { PrismaClient } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const seed = async () => {
  await db.expense.deleteMany();
  await db.income.deleteMany();
  await db.category.deleteMany();

  console.log("Database cleaned successfully.");

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
        createdAt: new Date("2024-03-21")
      },
      {
        amount: 1300,
        description: "Dnevna kupovina namirnica.",
        categoryId: foodCategory.id,
        createdAt: new Date("2024-03-06")
      },
      {
        amount: 4000,
        description: "Dnevno tocenje goriva.",
        categoryId: fuelCategory.id,
        createdAt: new Date("2024-02-20")
      },
      {
        amount: 6300,
        description: "Dnevna kupovina namirnica.",
        categoryId: foodCategory.id,
        createdAt: new Date("2024-02-21")
      },
    ],
  });

  await db.income.createMany({
    data: [
      {
        amount: 5000,
        categoryId: incomeCategory.id,
        description: "Dresovi FK Backa",
        createdAt: new Date("2024-03-07")
      },
      {
        amount: 2000,
        categoryId: incomeCategory.id,
        description: "Usluga stampe",
        createdAt: new Date("2024-03-05")
      },
      {
        amount: 7000,
        categoryId: incomeCategory.id,
        description: "Dresovi FK Backa",
        createdAt: new Date("2024-02-22")
      },
      {
        amount: 1000,
        categoryId: incomeCategory.id,
        description: "Usluga stampe",
        createdAt: new Date("2024-02-23")
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
