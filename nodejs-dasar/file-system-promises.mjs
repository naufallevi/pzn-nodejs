import fs from "fs/promises";

// Promises / Asynchronous / Non Blocking
const bufferPromises = await fs.readFile("os.mjs");
console.info(bufferPromises.toString());

await fs.writeFile("tempPromises.txt", "Lorem ipsum dolor sit amet.");

await fs.unlink("tempSync.txt")
