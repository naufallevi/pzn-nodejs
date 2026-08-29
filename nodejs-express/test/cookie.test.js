import express from "express";
import request from "supertest";
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  const name = req.cookies["fName"];
  res.send(`Hello ${name}`)
})

app.post("/login", (req, res) => {
  const fName = req.body.name;
  res.cookie("Login", fName, {path: "/"})
  res.send(`Hello ${fName}`)
})

test("test cookie reading", async () => {
  const response = await request(app).get("/").set("cookie", "fName=Grace;lName=Ashcroft");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello Grace");
})

test("test cookie writing", async () => {
  const response = await request(app).post("/login").send({name: "Grace"});
  expect(response.status).toBe(200);
  expect(response.get("set-cookie").toString()).toBe("Login=Grace; Path=/");
  expect(response.text).toBe("Hello Grace");
})