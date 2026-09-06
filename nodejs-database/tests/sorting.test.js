import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can do sorting", async () => {
    const customers = await prismaClient.customer.findMany({
      skip: 0,
      take: 10,
      orderBy: [{ name: "asc" }, { email: "desc" }],
    });

    for (const customer of customers) {
      console.log(`${customer.name} --- ${customer.email}`);
    }
    
    expect(customers.length).toBeGreaterThan(5);
  });
});
