import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can create many records", async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "5",
          name: "Thor Odinson",
          email: "thor.got@avengers.ny",
          phone: "111-111-1115",
        },
        {
          id: "6",
          name: "Hulk",
          email: "hulk.smash@avengers.ny",
          phone: "111-111-1116",
        },
      ],
    });

    expect(count).toBe(2);
  });

  it("should can update many records", async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        email: "strongest.avenger@avengers.ny",
      },
      where: {
        name: "Thor Odinson",
      },
    });

    expect(count).toBe(1);
  });

  it("should can delete many records", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: "Nothing",
      },
    });

    expect(count).toBe(0);
  });

  it("should can read many records", async () => {
    const customers = await prismaClient.customer.findMany({});
    console.info(customers);

    expect(customers.length).toBeGreaterThan(5);
  });
});
