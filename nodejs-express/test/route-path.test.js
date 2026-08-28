import express from "express";
import request from "supertest";

const app = express();

app.get("/products/*.json", (req, res) => {
  res.send(req.originalUrl);
});

app.get("/categories/*(\\d+).json", (req, res) => {
  res.send(req.originalUrl);
});

test("test route path", async () => {
  let response = await request(app).get("/products/example.json");
  expect(response.status).toBe(200);
  expect(response.text).toBe("/products/example.json");

  response = await request(app).get("/products/123.json");
  expect(response.status).toBe(200);
  expect(response.text).toBe("/products/123.json");

  response = await request(app).get("/categories/456.json");
  expect(response.status).toBe(200);
  expect(response.text).toBe("/categories/456.json");

  response = await request(app).get("/categories/test.json");
  expect(response.status).toBe(404);
});
