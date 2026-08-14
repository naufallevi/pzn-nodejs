export const sayHelloAsync = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name) {
        resolve(`Cuy ${name}`);
      } else {
        reject("Name is undefined");
      }
    }, 2000);
  });
};
