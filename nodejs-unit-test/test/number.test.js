test("test number", ()=> {
  const value = 5 + 5;

  expect(value).toBeGreaterThan(5)
  expect(value).toBeGreaterThanOrEqual(10)
  expect(value).toBeLessThan(15)
  expect(value).toBeLessThanOrEqual(10)

  expect(value).toBe(10)
})