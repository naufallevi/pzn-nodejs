import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can using or operator in where", async () => {
    const customers = await prismaClient.product.findMany({
      where: {
        OR: [
          {name: "A"},
          {name: "E"},
        ]
      },
      orderBy: {
        name: "asc",
      }
    })

    console.info(customers);
    expect(customers).toHaveLength(2);
    expect(customers[0].name).toBe("A");
    expect(customers[1].name).toBe("E");
  });
});
