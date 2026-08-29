import express from "express";
import request from "supertest";

const app = express();
// app.use(express.static(__dirname + "/static"));
app.use("/static/", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.send(`Hello response`);
});

app.get("/example.txt", (req, res) => {
  res.send(`Hello response`);
});

test("test static file", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello response");
});

test("test static file example.txt", async () => {
  const response = await request(app).get("/example.txt");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello response");
});

test("test static file /static/example.txt", async () => {
  const response = await request(app).get("/static/example.txt");
  expect(response.status).toBe(200);
  expect(response.text).toBe("This is a sample text");
});
