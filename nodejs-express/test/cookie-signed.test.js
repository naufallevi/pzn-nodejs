import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser("THISISASECRET"));
app.use(express.json());

app.get("/", (req, res) => {
  const name = req.signedCookies["Login"];
  res.send(`Hello ${name}`);
});

app.post("/login", (req, res) => {
  const fName = req.body.name;
  res.cookie("Login", fName, { path: "/", signed: true });
  res.send(`Hello ${fName}`);
});

test("test cookie reading", async () => {
  const response = await request(app).get("/").set("cookie", "Login=s%3AGrace.jBlVhWAfeWOu8PkIkY2fWFpXN43I9RT%2Fm%2BUQs%2BtZxUs; Path=/");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello Grace");
});

test("test cookie writing", async () => {
  const response = await request(app).post("/login").send({ name: "Grace" });
  expect(response.status).toBe(200);
  console.info(response.get("Set-Cookie").toString())
  expect(response.get("set-cookie").toString()).toContain("Grace");
  expect(response.text).toBe("Hello Grace");
});
