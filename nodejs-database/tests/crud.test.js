import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to create customer", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "1",
        name: "Nat",
        email: "nat@avengers.ny",
        phone: "1234567890",
      },
    });

    expect(customer).toBeDefined();
    expect(customer.id).toBe("1");
    expect(customer.name).toBe("Nat");
    expect(customer.email).toBe("nat@avengers.ny");
    expect(customer.phone).toBe("1234567890");
  });

  it("should be able to update customer", async () => {
    const customer = await prismaClient.customer.update({
      data: {
        id: "1",
        name: "Natasha Romanoff",
        email: "natasha.romanoff@avengers.ny",
      },
      where: {
        id: "1",
      },
    });

    expect(customer).toBeDefined();
    expect(customer.id).toBe("1");
    expect(customer.name).toBe("Natasha Romanoff");
    expect(customer.email).toBe("natasha.romanoff@avengers.ny");
  });

  it("should be able to read customer", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "1",
      },
    });

    expect(customer).toBeDefined();
    expect(customer.id).toBe("1");
    expect(customer.name).toBe("Natasha Romanoff");
    expect(customer.email).toBe("natasha.romanoff@avengers.ny");
    expect(customer.phone).toBe("1234567890");
  });

    it("should be able to delete customer", async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: "1",
      },
    });

    expect(customer).toBeDefined();
    expect(customer.id).toBe("1");
    expect(customer.name).toBe("Natasha Romanoff");
    expect(customer.email).toBe("natasha.romanoff@avengers.ny");
    expect(customer.phone).toBe("1234567890");
  });
});
