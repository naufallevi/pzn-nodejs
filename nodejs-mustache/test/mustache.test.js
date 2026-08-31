import Mustache from "mustache";
import fs from "fs/promises"

test("menggunakan mustache", () => {
  const template = Mustache.render("Halo {{value}}", { value: "Dunia!" });
  console.info(template);
  expect(template).toBe("Halo Dunia!");
});

test("menggunakan mustache cache", () => {
  Mustache.parse("Halo {{value}}");

  const template = Mustache.render("Halo {{value}}", { value: "Dunia!" });
  console.info(template);
  expect(template).toBe("Halo Dunia!");
});

test("tags", () => {
  const template = Mustache.render("Halo {{value}}, my name is {{{tags}}}", {
    value: "Dunia!",
    tags: "<b>Naufallevi</b>",
  });
  console.info(template);
  expect(template).toBe("Halo Dunia!, my name is <b>Naufallevi</b>");
});

test("nested object", () => {
  const template = Mustache.render("Halo {{value.person}}", { 
    value: {
      person: "Grace Ashcroft"
    }
   });
  console.info(template);
  expect(template).toBe("Halo Grace Ashcroft");
});

test("mustache file", async () => {
  const templateFile = await fs.readFile("./templates/hello.mustache")
  .then((data) => data.toString())

  const data = Mustache.render(templateFile, {title: "Halo Dunia!"})
  console.info(data)
  expect(data).toContain("Halo Dunia!")
})

test("mustache sections not show", async () => {
  const templateFile = await fs.readFile("./templates/person.mustache")
  .then((data) => data.toString())

  const data = Mustache.render(templateFile, {})
  console.info(data)
  expect(data).not.toContain("Hello person")
})

test("mustache sections show", async () => {
  const templateFile = await fs.readFile("./templates/person.mustache")
  .then((data) => data.toString())

  const data = Mustache.render(templateFile, {
    person: {
      name: "Naufallevi"
    }
  })
  console.info(data)
  expect(data).toContain("Hello person")
})

test("sections data", async () => {
  const templateFile = await fs.readFile("./templates/person.mustache")
  .then((data) => data.toString())

  const data = Mustache.render(templateFile, {
    person: {
      name: "Naufallevi"
    }
  })
  console.info(data)
  expect(data).toContain("Hello person Naufallevi!")
})

test("inverted sections data", async () => {
  const templateFile = await fs.readFile("./templates/person.mustache")
  .then((data) => data.toString())

  const data = Mustache.render(templateFile, {})
  console.info(data)
  expect(data).toContain("Hello guest!")
})