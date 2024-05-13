// import { PrismaClient } from "@prisma/client";

const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

const seed = async () => {
  await db.transaction.deleteMany();
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
      name: "Radionica",
    },
  });
  await db.transaction.createMany({
    data: [
      {
        amount: -2000,
        description: "Dnevno tocenje goriva.",
        date: new Date("2024-03-21"),
        categoryId: fuelCategory.id,
      },
      {
        amount: -1300,
        description: "Dnevna kupovina namirnica.",
        categoryId: foodCategory.id,
        date: new Date("2024-03-06")
      },
      {
        amount: -4000,
        description: "Dnevno tocenje goriva.",
        categoryId: fuelCategory.id,
        date: new Date("2024-02-20")
      },
      {
        amount: -6300,
        description: "Dnevna kupovina namirnica.",
        categoryId: foodCategory.id,
        date: new Date("2024-02-21")
      },
      {
        amount: 6300,
        description: "FK backa dresovi",
        categoryId: incomeCategory.id,
        date: new Date("2024-05-02")
      },
      {
        amount: 7000,
        description: "Bayern dresovi",
        categoryId: incomeCategory.id,
        date: new Date("2024-05-01")
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
