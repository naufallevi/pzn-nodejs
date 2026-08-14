import { sayHelloAsync } from "../src/async"

test.concurrent("test concurrent 1", async () => {
  await expect(sayHelloAsync("Wanda Maximoff")).resolves.toBe("Cuy Wanda Maximoff");
})
test.concurrent("test concurrent 2", async () => {
  await expect(sayHelloAsync("Jean Grey")).resolves.toBe("Cuy Jean Grey");
})
test.concurrent("test concurrent 3", async () => {
  await expect(sayHelloAsync("Natasha Romanoff")).resolves.toBe("Cuy Natasha Romanoff");
})
test.concurrent("test concurrent 4", async () => {
  await expect(sayHelloAsync("Kamala Khan")).resolves.toBe("Cuy Kamala Khan");
})