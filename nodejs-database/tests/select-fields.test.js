import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("should can create and select fields", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "7",
        name: "Steve Rogers",
        email: "steve.rogers@avengers.ny",
        phone: "111-111-1117",
      },
      select: {
        id: true,
        name: true,
      },
    });

    console.info(customer);
    expect(customer.id).toBe("7");
    expect(customer.name).toBe("Steve Rogers");
    expect(customer.email).toBeUndefined();
    expect(customer.phone).toBeUndefined();
  });

  it("should can select fields", async () => {
    const customers = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    console.info(customers);
    for (const customer of customers) {
      expect(customer.id).toBeDefined();
      expect(customer.name).toBeDefined();
      expect(customer.email).toBeUndefined();
      expect(customer.phone).toBeUndefined();
    }
  });
});
