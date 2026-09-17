import Joi from "joi";

describe("Joi", () => {
  it("should validate array", () => {
    const schema = Joi.array().min(1).max(3).unique().items(Joi.string().required().min(3).max(30));

    const request = ["item1", "item2", "item3"];

    const result = schema.validate(request, { abortEarly: false });
    console.info(result);
  });

  it("should validate array of object", () => {
    const schema = Joi.array()
      .min(1)
      .items(
        Joi.object({
          id: Joi.string().required().max(100),
          name: Joi.string().required().max(100),
        }),
      );

    const request = [{ id: "1", name: "Item 1" }, { id: undefined, name: "Item 2" }, {}];

    const result = schema.validate(request, { abortEarly: false });
    console.info(result);
  });
});
