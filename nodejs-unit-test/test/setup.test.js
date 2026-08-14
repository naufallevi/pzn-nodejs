import { sum } from "../src/sum";

beforeAll(() => {
  console.info("before All");
});

afterAll(() => {
  console.info("after All");
});

beforeEach(() => {
  console.info("before Each");
});

afterEach(() => {
  console.info("after Each");
});

test("test 1",  () => {
  expect(sum(10,10)).toBe(20);
  console.info("test 1");
})
test("test 2",  () => {
  expect(sum(20,20)).toBe(40);
  console.info("test 2");
})
