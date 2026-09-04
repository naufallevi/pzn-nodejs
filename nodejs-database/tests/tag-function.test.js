function tagFunction(array, ...args) {
  console.info(array);
  console.info(args);
}

test("tag function", () => {
  const fName = "Grace";
  const lName = "Ashcroft";
  tagFunction`Hello ${fName} ${lName}, welcome to the Raccoon City`;
  tagFunction`Bye ${fName} ${lName}, good luck for your next adventure`;
})

test("tag function sql", () => {
  const fullName = "Yelena Belova";
  const age = 25;
  tagFunction`SELECT * FROM users WHERE full_name = ${fullName} AND age = ${age}`;
})