import express from "express";
import request from "supertest";

const logger = (req, res, next) => {
  console.log(`Receive request: ${req.method} ${req.originalUrl}`);
  next();
};

const addPoweredHeader = (req, res, next) => {
  res.set("X-Powered-By", "CodeRow Recodes");
  next();
};

const apiKeyMiddleware = (req, res, next) => {
  if (req.query.apiKey) {
    next();
  } else {
    res.status(401).send("unauthorized").end();
  }
};

const requestTimeMiddleware = (req, res, next) => {
  req.requestTime = new Date(Date.now()).toString();
  next();
};

const app = express();
app.use(logger);
app.use(apiKeyMiddleware);
app.use(addPoweredHeader);
app.use(requestTimeMiddleware);

app.get("/", (req, res) => {
  res.send(`Hello response`);
});

app.get("/cdr", (req, res) => {
  res.send(`Hello CodeRow Recodes`);
});

app.get("/time", (req, res) => {
  res.send(`Hello, the time is ${req.requestTime}`);
});

test("test response middleware 1", async () => {
  const response = await request(app).get("/").query({ apiKey: 123456 });
  expect(response.status).toBe(200);
  expect(response.get("X-Powered-By")).toBe("CodeRow Recodes");
  expect(response.text).toBe("Hello response");
});

test("test response middleware 2", async () => {
  const response = await request(app).get("/cdr").query({ apiKey: 123456 });
  expect(response.status).toBe(200);
  expect(response.get("X-Powered-By")).toBe("CodeRow Recodes");
  expect(response.text).toBe("Hello CodeRow Recodes");
});

test("test response middleware unauthorized", async () => {
  const response = await request(app).get("/cdr");
  expect(response.status).toBe(401);
  // expect(response.get("X-Powered-By")).toBe("CodeRow Recodes");
  expect(response.text).toBe("unauthorized");
});

test("test response middleware time", async () => {
  const response = await request(app).get("/time").query({ apiKey: 123456 });
  expect(response.status).toBe(200);
  // expect(response.get("X-Powered-By")).toBe("CodeRow Recodes");
  expect(response.text).toContain("Hello, the time is");
});
