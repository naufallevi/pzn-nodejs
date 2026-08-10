import _ from "lodash";

const fullName = "Grace Ashcroft";
console.info(_.capitalize(fullName));
console.info(_.camelCase(fullName));
console.info(_.startCase(fullName));

const users = [
  { name: "Budi", age: 20 },
  { name: "Andi", age: 30 },
  { name: "Caca", age: 25 }
];

console.info(_.orderBy(users, ["name"], ["asc"]));
console.info(_.orderBy(users, ["age"], ["desc"]));