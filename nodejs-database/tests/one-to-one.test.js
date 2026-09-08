import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should create one to one relation", async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: "w-0001",
        balance: 1000000,
        customer_id: "1",
      },
      include: {
        customers: true,
      },
    });

    console.info(wallet);
  });

  it("should create one to one with relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "8",
        name: "Tony Stark",
        email: "tony.stark@avengers.ny",
        phone: "111-111-1118",
        wallet: {
          create: {
            id: "w-0002",
            balance: 2000000,
          },
        },
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });

  it("should find one to one with relation", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "1",
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });

    it("should find one to one with relation filter", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null
          // is: null
        }
      },
      include: {
        wallet: true,
      },
    });

    console.info(customers);
  });
});
