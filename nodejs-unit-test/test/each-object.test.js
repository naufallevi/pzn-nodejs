import { sumAll } from "../src/sum";

const table = [
  {numbers: [1, 1, 1], expected: 3},
  {numbers: [10, 10, 10], expected: 30},
  {numbers: [100, 100, 100], expected: 300},
];

test.each(table)("test sumAll($numbers) result $expected", ({numbers, expected}) => {
  expect(sumAll(numbers)).toBe(expected);
});
