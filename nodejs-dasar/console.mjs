import { Console } from "node:console";
import fs from "node:fs";
import { stderr, stdout } from "node:process";

const file = fs.createWriteStream("app.log");

const log = new Console({
  stdout: file,
  stderr: file,
});

log.info("Assalamualaikum");
log.log("Waalaikumsalam");
log.error("Empty item");

const car = {
  brand: "Suzuki",
  type: "Fronx",
  variants: [
    {
      code: "SGX",
      transmission: "Automatic",
      engine: "1.5L K15C",
      fuel: "Gasoline",
      drivetrain: "FWD",
    },
  ],
};

log.info(car);
log.table(car);
log.table(car.variants);
