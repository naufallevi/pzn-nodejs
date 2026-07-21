function samplePromise() {
  return Promise.resolve("Woooey!!!");
}

const sample = await samplePromise();
console.info(sample);
