import express from "express";
import request from "supertest";

const app = express();

app.get("/test/subtest", (req, res) => {
  res.json({
    originalUrl: req.originalUrl,
    path: req.path,
    hostname: req.hostname,
    protocol: req.protocol,
    secure: req.secure,
  });
});

test("test query url", async () => {
  const response = await request(app).get("/test/subtest").query({ name: "Grace" });
  expect(response.status).toBe(200);
  expect(response.body).toEqual({
    originalUrl: "/test/subtest?name=Grace",
    path: "/test/subtest",
    hostname: "127.0.0.1",
    protocol: "http",
    secure: false,
  });
});
