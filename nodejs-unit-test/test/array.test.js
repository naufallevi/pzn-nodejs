test("test array", () => {
  const teams = ["Mercedes", "Ferrari", "McLaren", "Red Bull"];
  expect(teams).toContain("Red Bull")
  expect(teams).toEqual(["Mercedes", "Ferrari", "McLaren", "Red Bull"])
})

test("test array with object", () => {
  const drivers = [
    { name: "Kimi Antonelli", team: "Mercedes" },
    { name: "Lewis Hamilton", team: "Ferrari" },
    { name: "Lando Norris", team: "McLaren" },
    { name: "Max Verstappen", team: "Red Bull" }
  ]

  expect(drivers).toContainEqual({ name: "Kimi Antonelli", team: "Mercedes" })
})