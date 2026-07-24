const buffer = Buffer.from("Grace Aschroft", "utf8")

console.info(buffer.toString());
console.info(buffer.toString("base64"));
console.info(buffer.toString("hex"));

const bufferBase64 = Buffer.from("R3JhY2UgQXNjaHJvZnQ=")
console.info(buffer.toString("utf8"));