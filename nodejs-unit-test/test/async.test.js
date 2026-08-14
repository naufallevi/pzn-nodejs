import { sayHelloAsync } from "../src/async"

test("test async", async () => {
  const result = await sayHelloAsync("Thor")
  expect(result).toBe("Cuy Thor")
})

test("test async matchers", async () => {
  await expect(sayHelloAsync("Dr. Doom")).resolves.toBe("Cuy Dr. Doom")
  await expect(sayHelloAsync()).rejects.toBe("Name is undefined")
})
