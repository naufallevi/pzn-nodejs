import process from "process";

console.info("===---===---=== 1");

process.addListener("exit", (exitCode) => {
  console.info("Exit code: " + exitCode);
})

console.info(process.version);
console.table(process.argv);
console.table(process.report);
console.table(process.env);

console.info("===---===---=== 2");

process.exit(1)

console.info("===---===---=== 3");