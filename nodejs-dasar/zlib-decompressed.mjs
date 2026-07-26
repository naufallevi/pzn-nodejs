import { info } from "node:console";
import fs from "node:fs";
import zlib from "node:zlib";

const source = fs.readFileSync("zlib-compressed.txt")
console.info(source.toString());

const result = zlib.unzipSync(source);
console.info(result.toString());
