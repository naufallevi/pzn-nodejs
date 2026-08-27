import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.set({
    "X-Powered-By": "CodeRow Recodes",
    "X-Author": "Naufallevi",
  });
  res.send(`Hello response`);
});

test("test response header", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello response");

  expect(response.get("X-Powered-By")).toBe("CodeRow Recodes");
  expect(response.get("X-Author")).toBe("Naufallevi");
});
