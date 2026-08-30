import express from "express";
import request from "supertest";
import mustacheExpress from "mustache-express";

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "html");
app.engine("html", mustacheExpress());

app.get("/", (req, res) => {
  res.render("index", {
    title: "Hello Mustache",
    body: "This is a body from Mustache template",
  });
});

test("test template", async () => {
  const response = await request(app).get("/");
  console.info(response.text);
  expect(response.status).toBe(200);
  expect(response.text).toContain("Hello Mustache");
  expect(response.text).toContain("This is a body from Mustache template");
});
