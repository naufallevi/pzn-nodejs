import express from "express";
import request from "supertest";

const app = express();

app
  .route("/products")
  .get((req, res) => {
    res.send("get product");
  })
  .post((req, res) => {
    res.send("create product");
  })
  .put((req, res) => {
    res.send("update product");
  });

test("test route function", async () => {
  let response = await request(app).get("/products");
  expect(response.status).toBe(200);
  expect(response.text).toBe("get product");

  response = await request(app).post("/products");
  expect(response.status).toBe(200);
  expect(response.text).toBe("create product");

  response = await request(app).put("/products");
  expect(response.status).toBe(200);
  expect(response.text).toBe("update product");
});
