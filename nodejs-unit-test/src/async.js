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

export const getBalance = async (name, from) => {
  const balance = await from();
  return {
    name: name,
    balance: balance,
  };
};
