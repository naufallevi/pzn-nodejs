import { sayHello } from "../src/sayhello";

test("test sayHello with name", () => {
  expect(sayHello("Grace Ashcroft")).toBe("Cuy Grace Ashcroft");
});

test.failing("test sayHello without name (failing)", () => {
  sayHello(null);
});

test("test sayHello without name (matchers)", () => {
  expect(() => sayHello(null)).toThrow();
});
