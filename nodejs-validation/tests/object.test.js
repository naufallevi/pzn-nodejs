import Joi from "joi";

describe("Joi", () => {
  it("should validate object", () => {
    const schema = Joi.object({
      username: Joi.string().required().min(3).max(30).email(),
      password: Joi.string().required().min(6).max(30),
    });

    const request = {
      username: "hwr@tva.com",
      password: "admin123",
    };

    const result = schema.validate(request, { abortEarly: false });
    console.info(result);
  });

  it("should validate nested object", () => {
    const schema = Joi.object({
      id: Joi.string().required().max(100),
      name: Joi.string().required().max(100),
      address: Joi.object({
        street: Joi.string().required().max(200),
        city: Joi.string().required().max(100),
        country: Joi.string().required().max(100),
        zipCode: Joi.string().required().max(10),
      }),
    });

    const request = {
      id: "1234567890",
      // name: "John Doe",
      name: undefined,
      address: {
        street: "123 Main St",
        city: "Anytown",
        // country: "USA",
        // zipCode: "12345",
      },
    };

    const result = schema.validate(request, { abortEarly: false });
    console.info(result);

    if (result.error) {
      result.error.details.forEach((detail) => {
        console.info(`Path: ${detail.path}, Message: ${detail.message}`);
      });
    }
  });
});
