import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to create a record with an auto-incrementing ID", async () => {
    const category = await prismaClient.category.create({
      data: {
        name: "Technology",
      },
    });

    console.info(category);
    expect(category).toHaveProperty("id");
  });
});
