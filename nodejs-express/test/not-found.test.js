import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello response`);
})

app.use((req,res)=> {
  res.status(404).send("Not Found");
})

test("test response", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello response");
})

test("test response not found", async () => {
  const response = await request(app).get("/empty-path");
  expect(response.status).toBe(404);
  expect(response.text).toBe("Not Found");
})