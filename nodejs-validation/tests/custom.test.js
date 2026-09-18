import Joi from "joi";

describe("Joi", () => {
  it("should can create custom validation", () => {
    const schema = Joi.object({
      email: Joi.string().required().email().min(3).max(100),
      password: Joi.string()
        .required()
        .min(6)
        .max(100)
        .custom((value, helpers) => {
          if (value.startsWith("123")) {
            return helpers.error("register.password.invalid");
          }
          return value;
        })
        .messages({
          "register.password.invalid": "Password cannot start with '123'",
        }),
      confirmPassword: Joi.string().required().min(6).max(100),
    })
      .custom((value, helpers) => {
        if (value.password !== value.confirmPassword) {
          return helpers.error("register.password.mismatch");
        }
        return value;
      })
      .messages({
        "register.password.mismatch": "Password and Confirm Password do not match",
      });

      const data = {
        email: "hwr@tva.com",
        password: "always a time",
        confirmPassword: "always a time"
      }

      const result = schema.validate(data, { abortEarly: false });
      console.info(result);
  });
});
