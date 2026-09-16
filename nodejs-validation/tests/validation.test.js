import Joi from "joi";

describe("Joi", () => {
  it("should create a schema", () => {
    const schema = Joi.string().min(3).max(10).required();
    const name = "HWR";

    const result = schema.validate(name);
    if (result.error) {
      console.info(result);
      console.info(result.error);
    }
  });

  it("should validate basic data type", () => {
    const usernameSchema = Joi.string().email().required();
    const booleanSchema = Joi.boolean().required();
    const priceSchema = Joi.number().positive().min(0).max(1000000).required();

    const resultUsername = usernameSchema.validate("sylvie@tva.com");
    console.info(resultUsername);

    const resultIsTrue = booleanSchema.validate(true);
    console.info(resultIsTrue);

    const resultPrice = priceSchema.validate(100000);
    console.info(resultPrice);
  });
});
