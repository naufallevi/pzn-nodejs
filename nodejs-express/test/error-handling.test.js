import express from "express";
import request from "supertest";

const app = express();

const errorHandler = (err, req, res, next) => {
  res.status(500).send(`Terjadi error: ${err.message}`);
};

app.get("/", (req, res) => {
  throw new Error("What!!!");
});
app.use(errorHandler);

test("test response", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(500);
  expect(response.text).toBe("Terjadi error: What!!!");
});
