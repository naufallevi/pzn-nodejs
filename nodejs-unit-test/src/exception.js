export class MyException extends Error {}

export const callFunc = (name) => { 
  if (name === "Kocak") {
    throw new MyException("Kocak is not allowed");
  } else {
    return `Hello ${name}`;
  }
}
