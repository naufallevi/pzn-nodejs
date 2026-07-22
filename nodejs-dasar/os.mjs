import os from "os";

console.info(os.platform());
console.info(os.arch());
console.info(os.freemem() / 1024 ** 3);
console.info(os.totalmem() / 1024 ** 3);
console.info(os.homedir());
console.info(os.hostname());

console.table(os.cpus());
console.table(os.networkInterfaces());
