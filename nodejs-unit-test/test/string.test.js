test("test string", () => {
  const fullName = "Grace Aschroft";

  expect(fullName).toBe("Grace Aschroft");
  expect(fullName).toEqual("Grace Aschroft");
  expect(fullName).toMatch(/ace/);
})