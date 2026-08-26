import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello ${req.query.fname} ${req.query.lname}`);
});

test("test query parameters", async () => {
  const response = await request(app).get("/").query({ fname: "Wanda", lname: "Maximoff" });
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello Wanda Maximoff");
});
