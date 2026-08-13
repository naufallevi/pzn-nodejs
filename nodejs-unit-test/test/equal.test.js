test("test toBe", () => {
  const fullName = "Grace Aschroft";
  const welcomeMessage = `Welcome ${fullName}`;

  expect(welcomeMessage).toBe("Welcome Grace Aschroft");
});

test("test toEqual", () => {
  const person = { fName: "Jill" };
  Object.assign(person, { lName: "Valentine" });

  expect(person).toEqual({ fName: "Jill", lName: "Valentine" });
});
