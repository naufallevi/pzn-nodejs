import fs from "fs";
import fsP from "fs/promises";

// Synchronous / Blocking
const buffer = fs.readFileSync("web-api.js");
console.info(buffer.toString());

fs.writeFileSync("tempSync.txt", "Lorem ipsum dolor sit amet.");

// Promises / Asynchronous / Non Blocking
const bufferPromises = await fsP.readFile("os.mjs");
console.info(bufferPromises.toString());

await fsP.writeFile("tempPromises.txt", "Lorem ipsum dolor sit amet.");

await fsP.unlink("tempSync.txt")
