import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should insert and include", async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: "1",
        title: "Test Comment",
        description: "This is a detailed test comment",
      },
      include: {
        customer: true,
      },
    });

    console.info(comment);
  });

  it("should insert and many relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "9",
        name: "Sam Wilson",
        email: "sam.wilso@avengers.ny",
        phone: "111-111-1119",
        comments: {
          createMany: {
            data: [
              {
                title: "Comment 1",
                description: "This is comment 1",
              },
              {
                title: "Comment 2",
                description: "This is comment 2",
              },
            ],
          },
        },
      },
      include: {
        comments: true,
      },
    });

    console.info(customer);
  });
});
