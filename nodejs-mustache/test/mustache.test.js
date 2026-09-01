import Mustache from "mustache";
import fs from "fs/promises";

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
      person: "Grace Ashcroft",
    },
  });
  console.info(template);
  expect(template).toBe("Halo Grace Ashcroft");
});

test("mustache file", async () => {
  const templateFile = await fs.readFile("./templates/hello.mustache").then((data) => data.toString());

  const data = Mustache.render(templateFile, { title: "Halo Dunia!" });
  console.info(data);
  expect(data).toContain("Halo Dunia!");
});

test("mustache sections not show", async () => {
  const templateFile = await fs.readFile("./templates/person.mustache").then((data) => data.toString());

  const data = Mustache.render(templateFile, {});
  console.info(data);
  expect(data).not.toContain("Hello person");
});

test("mustache sections show", async () => {
  const templateFile = await fs.readFile("./templates/person.mustache").then((data) => data.toString());

  const data = Mustache.render(templateFile, {
    person: {
      name: "Naufallevi",
    },
  });
  console.info(data);
  expect(data).toContain("Hello person");
});

test("sections data", async () => {
  const templateFile = await fs.readFile("./templates/person.mustache").then((data) => data.toString());

  const data = Mustache.render(templateFile, {
    person: {
      name: "Naufallevi",
    },
  });
  console.info(data);
  expect(data).toContain("Hello person Naufallevi!");
});

test("inverted sections data", async () => {
  const templateFile = await fs.readFile("./templates/person.mustache").then((data) => data.toString());

  const data = Mustache.render(templateFile, {});
  console.info(data);
  expect(data).toContain("Hello guest!");
});

test("list", async () => {
  const templateFile = await fs.readFile("./templates/hobbies.mustache").then((data) => data.toString());

  const data = Mustache.render(templateFile, { hobbies: ["Coding", "Gaming", "Watching Movies"] });
  console.info(data);
  expect(data).toContain("Coding");
  expect(data).toContain("Gaming");
  expect(data).toContain("Watching Movies");
});

test("list object", async () => {
  const templateFile = await fs.readFile("./templates/students.mustache").then((data) => data.toString());

  const data = Mustache.render(templateFile, {
    students: [
      { nama: "Grace Ashcroft", nilai: 100 },
      { nama: "Leon S. Kennedy", nilai: 85 },
    ],
  });
  console.info(data);
  expect(data).toContain("Grace Ashcroft");
  expect(data).toContain("Leon S. Kennedy");
  expect(data).toContain("100");
  expect(data).toContain("85");
});

test("functions", async () => {
  const parameter = {
    fName: "Grace",
    upper: () => {
      return (text, render) => {
        return render(text).toUpperCase();
      };
    },
  };
  const data = Mustache.render("Hello {{#upper}}{{fName}}{{/upper}}", parameter);
  console.info(data);
  expect(data).toContain("Hello GRACE");
});

test("comment", async () => {
  const templateFile = await fs.readFile("./templates/comment.mustache").then((data) => data.toString());

  const data = Mustache.render(templateFile, { title: "Halo Dunia!" });
  console.info(data);
  expect(data).toContain("Halo Dunia!");
  expect(data).not.toContain("ini komentar");
});

test("partials", async () => {
  const headerTemplate = await fs.readFile("./templates/header.mustache").then((data) => data.toString());
  const footerTemplate = await fs.readFile("./templates/footer.mustache").then((data) => data.toString());
  const contentTemplate = await fs.readFile("./templates/content.mustache").then((data) => data.toString());

  const data = Mustache.render(
    contentTemplate,
    {
      title: "Halo NodeJS",
      content: "Belajar partials di Mustache JS",
    },
    {
      header: headerTemplate,
      footer: footerTemplate,
    },
  );
  console.info(data);
  expect(data).toContain("Halo NodeJS");
  expect(data).toContain("Belajar partials di Mustache JS");
  expect(data).toContain("CodeRow Recodes");
});
