test("test not string", () => {
  const fullName = "Grace Aschroft";

  expect(fullName).not.toBe("Leon S. Kennedy");
  expect(fullName).not.toEqual("Leon S. Kennedy");
  expect(fullName).not.toMatch(/Ken/);
});

test("test not number", () => {
  const value = 5 + 5;

  expect(value).not.toBeGreaterThan(10);
  expect(value).not.toBeGreaterThanOrEqual(15);
  expect(value).not.toBeLessThan(5);
  expect(value).not.toBeLessThanOrEqual(5);
});
