import timers from "timers/promises";

// console.info(new Date());
// const timeoutVar = await timers.setTimeout(5000, "Fire!")
// console.info(new Date());
// console.info(timeoutVar);

for await (const startTime of timers.setInterval(1000, "Empty")) {
  console.info(new Date());
}