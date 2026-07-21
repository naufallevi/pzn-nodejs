function samplePromise() {
  return Promise.resolve("Woooey!!!");
}

// const sample = await samplePromise();
// console.info(sample);

async function run() {
  const sample = await samplePromise();
  console.info(sample);
}

run();
