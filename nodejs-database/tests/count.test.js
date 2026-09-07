import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can count", async () => {
    const count = await prismaClient.customer.count({
      where: {
        name: "Natasha Romanoff",
      },
    });

    expect(count).toBe(2);
  });
});
