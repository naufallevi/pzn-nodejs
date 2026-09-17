import Joi from "joi";

describe("Joi", () => {
  it("should validate date", () => {
    const dataSchema = Joi.date().min("1-1-2020").max("now").required();

    const resultTrue = dataSchema.validate("1-1-2021");
    console.info(resultTrue);
    console.info(typeof resultTrue.value);
    console.info(typeof resultTrue.error);

    const resultFalseBefore = dataSchema.validate("1-1-2019");
    console.info(resultFalseBefore);
    console.info(typeof resultFalseBefore.value); // Date
    console.info(typeof resultFalseBefore.error); // ValidationError

    const resultTrueAfter = dataSchema.validate("1-1-2027");
    console.info(resultTrueAfter);
  });
});
