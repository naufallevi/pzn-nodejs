import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  const type = req.get("accept");
  res.send(`Header Accept ${type}`);
});

test("test get header", async () => {
  const response = await request(app).get("/")
  .set("Accept", "text/plain");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Header Accept text/plain");
});
