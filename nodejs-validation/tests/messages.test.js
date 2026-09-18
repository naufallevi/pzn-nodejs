import Joi from "joi";

describe("Joi", () => {
  it("should use custom messages", () => {
    const schema = Joi.string().required().min(3).max(10).messages({
      "string.base": "{{#label}} wajib text string",
      "string.min": "{{#label}} minimal {{#limit}} karakter",
      "string.max": "{{#label}} maksimal {{#limit}} karakter",
      "any.required": "{{#label}} wajib diisi",
    });

    const result = schema.validate("hwr", { abortEarly: false });
    console.info(result);
  });

  it("should use custom messages in object validation", () => {
    const schema = Joi.object({
      name: Joi.string().required().email().messages({
        "string.base": "{{#label}} wajib text string",
        "any.required": "{{#label}} wajib diisi",
        "string.email": "{{#label}} harus berupa email yang valid",
      }),
      password: Joi.string().required().min(6).max(10).messages({
        "any.required": "{{#label}} wajib diisi",
        "string.min": "{{#label}} minimal {{#limit}} karakter",
        "string.max": "{{#label}} maksimal {{#limit}} karakter",
      }),
    });

    const data = {
      name: "test@tva.com",
      password: "12345678",
    };

    const result = schema.validate(data, { abortEarly: false });
    console.info(result);
  });
});
