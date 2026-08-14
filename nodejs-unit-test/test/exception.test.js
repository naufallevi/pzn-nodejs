import { callFunc, MyException } from "../src/exception";

test("test exception", () => {
  expect(() => callFunc("Kocak")).toThrow();
  expect(() => callFunc("Kocak")).toThrow(MyException);
  expect(() => callFunc("Kocak")).toThrow("Kocak is not allowed");
});

test("test exception else", () => {
  expect(callFunc("Kocik")).toBe("Hello Kocik");
});
