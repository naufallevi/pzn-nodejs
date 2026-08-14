import { sum, sumAll } from "../src/sum";

test("test sum function 1", () => {
  const result = sum(5, 5);
  expect(result).toBe(10);
});

test("test sum function 2", () => {
  const result = sum(5, 5);
  expect(result).toBe(10);
});

test("test sum function 3", () => {
  const result = sum(5, 5);
  expect(result).toBe(10);
});

test("test sumAll function", ()=> {
  expect(sumAll([10,10,10,10,10])).toBe(50)
})