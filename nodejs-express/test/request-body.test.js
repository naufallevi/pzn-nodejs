import express from "express";
import request from "supertest";
import expressFileupload from "express-fileupload";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressFileupload());

app.post("/json", (req, res) => {
  const name = req.body.name;
  res.json({ message: `Hello ${name}` });
});

app.post("/form", (req, res) => {
  const name = req.body.name;
  res.json({ message: `Hello ${name}` });
});

app.post("/file", async(req, res) => {
  const textFile = req.files.article;
  await textFile.mv(__dirname + "/uploads/" + textFile.name);
  res.send(`Hello ${req.body.name}, yourfile ${textFile.name} has been uploaded`);
});

test("test request body json", async () => {
  const response = await request(app).post("/json").set("content-type", "application/json").send({ name: "world" });
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ message: "Hello world" });
});

test("test request body form", async () => {
  const response = await request(app)
    .post("/form")
    .set("content-type", "application/x-www-form-urlencoded")
    .send("name=world");
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ message: "Hello world" });
});

test("test request file upload", async () => {
  const response = await request(app)
    .post("/file")
    .set("content-type", "multipart/form-data")
    .field("name", "Grace")
    .attach("article", __dirname + "/example.txt");
  expect(response.status).toBe(200);
  expect(response.text).toBe("Hello Grace, yourfile example.txt has been uploaded");
});
