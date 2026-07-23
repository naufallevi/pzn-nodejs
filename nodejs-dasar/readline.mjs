import readline from "readline";
import process from "process";

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input.question("Masukkan kode rahasia anda! ", (kode) => {
  console.info(`Kode rahasianya adalah ${kode}`);
  input.close();
});
