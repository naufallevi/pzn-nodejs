setTimeout(() => {
  console.info("Ms. Grace Ashcroft");
  clearInterval(intervalId);
}, 5000);

const intervalId = setInterval(() => {
  for (let i = 1; i <= 3; i++) {
    console.info(i);
  }
  console.info("===---===---===");
}, 1000);
