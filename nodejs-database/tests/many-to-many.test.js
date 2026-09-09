import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should insert many to many relattion", async () => {
    const like = await prismaClient.like.create({
      data: {
        customer_id: "1",
        product_id: "P-0003",
      },
      include: {
        customer: true,
        product: true,
      },
    });

    console.info(like);
  });

  it("should find one with many to many relation", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "8",
      },
      include: {
        likes: {
          include: {
            product: true,
          },
        },
      },
    });

    console.info(customer);
    console.info(customer.likes);
  });

  it("should find many with many to many relation", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        likes: {
          some: {
            product: {
              name: { contains: "C" },
            },
          },
        },
      },
      include: {
        likes: {
          include: {
            product: true,
          },
        },
      },
    });

    console.info(customers);
    for (const customer of customers) {
      console.info(customer.likes);
    }
  });

  it("should create implicit relation", async () => {
    const customer = await prismaClient.customer.update({
      where: {
        id: "1",
      },
      data: {
        loves: {
          connect: [{ id: "P-0001" }, { id: "P-0002" }],
        },
      },
      include: {
        loves: true,
      },
    });

    console.info(customer);
  });

  it("should find many implicit relation", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        loves: {
          some: {
            // OR: [{ name: { contains: "C" } }, { price: 1000 }],
            name: {
              contains: "A",
            }
          },
        },
      },
      include: {
        loves: true,
      },
    });

    console.info(customers);
    customers.forEach((customer) => {
      console.info(customer.loves);
    });
  });
});
