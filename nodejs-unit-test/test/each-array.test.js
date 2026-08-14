import { sumAll } from "../src/sum";

const table = [
  [[1, 1, 1], 3],
  [[10, 10, 10], 30],
  [[100, 100, 100], 300],
];

test.each(table)("test sumAll(%s) result %i", (numbers, expected) => {
  expect(sumAll(numbers)).toBe(expected);
});
