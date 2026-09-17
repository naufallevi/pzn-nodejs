import Joi from "joi";

describe("Joi", () => {
  it("shoul return validation error", () => {
    const schema = Joi.string().min(5).email().required();
    const result = schema.validate("hwr", { abortEarly: false });
    console.log(result);
    console.log(result.error);

    if (result.error) {
      result.error.details.forEach((detail) => {
        console.log(`Path: ${detail.path} --- Message: ${detail.message}`);
      });
    }
  });
});
