import express from "express";
import request from "supertest";

const app = express();

app.get("/products/:id", (req, res) => {
  res.send(`Product ID: ${req.params.id}`);
});

// app.get("/seller/:sellerId/categories/:id(\\d+)", (req, res) => {
//   res.send(`${req.params.sellerId} ${req.params.id}`);
// });

test("test route parameter", async () => {
  let response = await request(app).get("/products/example");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Product ID: example");

  response = await request(app).get("/products/123");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Product ID: 123");

  response = await request(app).get("/categories/456");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Category ID: 456");

  response = await request(app).get("/categories/test");
  expect(response.status).toBe(404);
});
