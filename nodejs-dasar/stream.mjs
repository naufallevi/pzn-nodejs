import { info } from "console";
import fs from "fs";

const writer = fs.createWriteStream("target.log");
writer.write(
  "Mercedes-AMG Petronas Formula One Team merupakan salah satu konstruktor paling sukses dan ikonik dalam sejarah modern Formula 1, terutama setelah mendominasi kompetisi secara luar biasa pada era mesin hybrid dengan torehan delapan gelar konstruktor berturut-turut dan berbagai gelar juara dunia bersama Lewis Hamilton. Di bawah kepemimpinan Toto Wolff, tim yang berbasis di Brackley ini terus bertransformasi menghadapi tantangan regulasi dan unit daya terbaru, mempertahankan statusnya sebagai raksasa motorsport yang memadukan inovasi teknologi canggih, strategi brilian, serta lini pembalap berkelas dunia seperti George Russell dan Kimi Antonelli untuk terus memperebutkan podium tertinggi dan melanjutkan warisan emas mereka di lintasan balap.\n\n",
);
writer.write("~ Qwen");

const reader = fs.createReadStream("target.log");

reader.addListener("data", (data) => {
  console.info(data.toString());
})
