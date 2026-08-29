import express from "express";
import request from "supertest";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/json", (req, res) => {
  const name = req.body.name;
  res.json({ message: `Hello ${name}` });
});

app.post("/form", (req, res) => {
  const name = req.body.name;
  res.json({ message: `Hello ${name}` });
});

test("test request body json", async () => {
  const response = await request(app).post("/json").set("content-type", "application/json").send({name: "world"});
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ message: "Hello world" });
});

test("test request body form", async () => {
  const response = await request(app).post("/form").set("content-type", "application/x-www-form-urlencoded").send("name=world");
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ message: "Hello world" });
});
