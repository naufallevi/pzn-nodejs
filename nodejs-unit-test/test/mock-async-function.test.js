import { getBalance } from "../src/async";

test("test mock async function", async () => {
  const from = jest.fn();
  from.mockResolvedValueOnce(1200);

  await expect(getBalance("Jean Grey", from)).resolves.toEqual({
    name: "Jean Grey",
    balance: 1200,
  });

  console.info(from.mock);

  expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(1200);
});

test.failing("test mock async function with reject", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("Something went wrong"));

  console.info(from.mock);

  await getBalance("Wanda Maximoff", from);
});

test("test mock async function error (matchers)", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce("Something went wrong");

  console.info(from.mock);
  await expect(getBalance("Natasha Romanoff", from)).rejects.toBe("Something went wrong");
});
