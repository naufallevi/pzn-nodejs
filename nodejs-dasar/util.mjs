import util from "util";
import fs from "fs";

const fName = "Grace";
const lName = "Aschroft";
console.info(`Hello ${fName} ${lName}`);
console.info(util.format("Hello %s %s", fName, lName));

const person = {
  fName: "Jill",
  lName: "Valentine",
};

console.info(`Fullname : ${JSON.stringify(person)}`);
console.info(util.format("Fullname : %j", person));

const readFileAsync = util.promisify(fs.readFile);

async function bacaFile() {
  try {
    const data = await readFileAsync("tempPromises.txt", "utf8");
    console.info("===---===---===");
    console.log(data);
  } catch (err) {
    console.error("Gagal membaca file:", err);
  }
}

bacaFile();

console.info("===---===---===");

const user = {
  nama: "Budi",
  detail: {
    peran: "Admin",
    akses: ["baca", "tulis"],
  },
};

console.log(util.inspect(user, { showHidden: false, depth: null, colors: true }));