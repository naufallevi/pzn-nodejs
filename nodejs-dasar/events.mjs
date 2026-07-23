import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.addListener("say", (name, pronoun) => {
  console.info(`Hello, ${pronoun} ${name}`);
});
emitter.addListener("say", (name) => {
  console.info(`Woeyyy ${name}`);
});

emitter.emit("say", "Grace", "Ms.");
