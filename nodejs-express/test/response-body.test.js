import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.set("content-type", "text/html");
  res.send(`<html><body>Text Body</body></html>`);
});

test("test response body", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
  expect(response.get("Content-Type")).toContain("text/html");
  expect(response.text).toBe(`<html><body>Text Body</body></html>`);
});
