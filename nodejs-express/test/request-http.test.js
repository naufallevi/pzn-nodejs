import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello ${req.query.name}`);
})

test("test query parameters", async () => {
  const response = await request(app).get("/").query({name: "Grace"});
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello Grace");
})