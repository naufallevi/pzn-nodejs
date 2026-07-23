import readline from "readline/promises";
import process from "process";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function main() {
  const nama = await input.question("Inputkan nama anda! ");
  console.info(`Nama anda adalah ${nama}`);
  input.close();
}

main();
