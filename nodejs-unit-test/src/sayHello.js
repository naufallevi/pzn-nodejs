export const sayHello = (name) => {
  if (name) {
    return `Cuy ${name}`;
  } else {
    throw new Error("Name is required");
  }
};
