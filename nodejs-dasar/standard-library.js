import os from "os";

console.info(os.platform());
console.info(os.cpus());
console.log(JSON.stringify(os.cpus(), null, 10));