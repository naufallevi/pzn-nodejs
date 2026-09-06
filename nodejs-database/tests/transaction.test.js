import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should can execute sequential transaction", async () => {
    const [nat, bruce] = await prismaClient.$transaction(
      [
        prismaClient.customer.create({
          data: {
            id: "1",
            name: "Natasha Romanoff",
            email: "natasha.romanoff@avengers.ny",
            phone: "111-111-1111",
          },
        }),
        prismaClient.customer.create({
          data: {
            id: "2",
            name: "Bruce Banner",
            email: "bruce.banner@avengers.ny",
            phone: "111-111-1112",
          },
        }),
      ],
      {
        timeout: 5000,
      },
    );

    expect(nat.name).toBe("Natasha Romanoff");
    expect(bruce.name).toBe("Bruce Banner");
  });

  it("should can execute interactive transaction", async () => {
    const [nat, bruce] = await prismaClient.$transaction(
      async (prisma) => {
        const nat = await prisma.customer.create({
          data: {
            id: "3",
            name: "Natasha Romanoff",
            email: "natasha.romanoff1@avengers.ny",
            phone: "111-111-1113",
          },
        });
        const bruce = await prisma.customer.create({
          data: {
            id: "4",
            name: "Bruce Banner",
            email: "bruce.banner1@avengers.ny",
            phone: "111-111-1114",
          },
        });

        return [nat, bruce];
      },
      {
        timeout: 1000,
      },
    );

    expect(nat.name).toBe("Natasha Romanoff");
    expect(bruce.name).toBe("Bruce Banner");
  });
});
