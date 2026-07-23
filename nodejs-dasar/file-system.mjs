import fs from "fs";

// Synchronous / Blocking
const buffer = fs.readFileSync("web-api.js");
console.info(buffer.toString());

fs.writeFileSync("tempSync.txt", "Lorem ipsum dolor sit amet.");