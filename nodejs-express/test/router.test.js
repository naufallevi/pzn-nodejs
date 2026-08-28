import express from "express";
import request from "supertest";

const app = express();
const router = express.Router();

router.use((req, res, next) => {
  console.log(`Receive request: ${req.method} ${req.originalUrl}`);
  next();
});

router.get("/products", (req, res) => {
  res.send("feature products");
});

test("test route disabled", async () => {
  const response = await request(app).get("/products");
  expect(response.status).toBe(404);
  // expect(response.text).toBe("feature products");
});

test("test route enabled", async () => {
  app.use(router);
  const response = await request(app).get("/products");
  expect(response.status).toBe(200);
  expect(response.text).toBe("feature products");
});
