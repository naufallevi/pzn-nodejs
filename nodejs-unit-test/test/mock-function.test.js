import { calculate, calculateAndReturn } from "../src/sum";

test("test mock function", () => {
  const callback = jest.fn();

  calculate([1, 1, 1, 1, 1], callback);
  calculate([10, 10, 10, 10, 10], callback);

  console.info(callback.mock.calls);

  expect(callback.mock.calls.length).toBe(2);
  expect(callback.mock.calls[0][0]).toBe(5);
  expect(callback.mock.calls[1][0]).toBe(50);
});

test("test without mock function", () => {
  const logging = (total) => {
    console.info(total);
  };

  calculate([1, 1, 1, 1, 1], logging);
  calculate([10, 10, 10, 10, 10], logging);
});

test("test mock function with return value", () => {
  const callback = jest.fn();
  callback.mockReturnValueOnce(75);
  callback.mockReturnValueOnce(111);

  expect(calculateAndReturn([1, 1], callback)).toBe(75);
  expect(calculateAndReturn([1, 1, 1], callback)).toBe(111);

  console.info(callback.mock);

  expect(callback.mock.results[0].value).toBe(75);
  expect(callback.mock.results[1].value).toBe(111);
});

test("test mock implementation", () => {
  const callback = jest.fn();
  callback.mockImplementation((total) => total * 2);

  expect(calculateAndReturn([1, 1, 1, 1, 1], callback)).toBe(10);
  expect(calculateAndReturn([10, 10, 10, 10, 10], callback)).toBe(100);

  console.info(callback.mock.results[0].value)
});
