import path from "path";

const file = "/naufallevi/Project/practice/pzn_nodejs/nodejs-dasar/hello-world.js"

console.info(path.dirname(file));
console.info(path.basename(file));
console.info(path.extname(file));
console.info(path.parse(file));
console.info(path.normalize(file));
console.info(path.delimiter);