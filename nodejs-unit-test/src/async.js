export const sayHelloAsync = (name) => {
  return new Promise((resolve, reject) => {
    console.log(`START: ${name}`);
    setTimeout(() => {
      console.log(`END: ${name}`);
      if (name) {
        resolve(`Cuy ${name}`);
      } else {
        reject("Name is undefined");
      }
    }, 2000);
  });
};
