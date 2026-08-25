import express from "express";

const app = express();

app.get("/", (request, response) => {
  response.send("Hello World!");
})

app.get("/grace", (request, response) => {
  response.send("Hello Grace, Welcome to Express JS");
})

app.listen(3000, () => console.log("Server is running on port 3000"));
