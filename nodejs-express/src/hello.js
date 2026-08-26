import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.get("/grace", (req, res) => {
  res.send("Hello Grace, Welcome to Express JS");
})

app.listen(3000, () => console.log("Server is running on port 3000"));
