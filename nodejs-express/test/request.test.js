import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
})

test("test ExpressJS", async () => {
  const response = await request(app).get("/");
  // expect(response.statusMessage).toBe("OK");
  console.info(response);
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello World!");
})