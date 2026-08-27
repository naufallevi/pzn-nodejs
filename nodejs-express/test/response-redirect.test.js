import express from "express";
import request from "supertest";

const app = express();

app.get("/", (req, res) => {
  res.redirect("/next-page");
  // res.redirect(301, "/next-page");
  // res.redirect("https://naufallevi-portfolio.vercel.app");
})

test("test response redirect", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(302);
  expect(response.get("Location")).toBe("/next-page");
})