beforeAll(() => console.info("Before All outer"));
afterAll(() => console.info("After All outer"));
beforeEach(() => console.info("Before Each outer"));
afterEach(() => console.info("After Each outer"));

test("test 1 outer", () => {
  console.info("Test 1 outer");
});

describe("describe 1", () => {
  beforeAll(() => console.info("Before All inner"));
  afterAll(() => console.info("After All inner"));
  beforeEach(() => console.info("Before Each inner 1"));
  afterEach(() => console.info("After Each inner 1"));

  test("test 1 inner", () => {
    console.info("Test 1 inner");
  });

  describe("describe 2", () => {
    beforeEach(() => console.info("Before Each inner 2"));
    afterEach(() => console.info("After Each inner 2"));

    test("test 1 inner 2", () => {
      console.info("Test 1 inner 2");
    });
  });
});
