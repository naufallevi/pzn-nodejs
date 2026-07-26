import { info } from "node:console";
import fs from "node:fs";
import zlib from "node:zlib";

const source = fs.readFileSync("zlib-compressed.mjs");
const result = zlib.gzipSync(source);

fs.writeFileSync("zlib-compressed.txt", result)
