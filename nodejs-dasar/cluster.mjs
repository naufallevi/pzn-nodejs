import cluster from "node:cluster";
import os from "node:os";
import process from "node:process";
import http, { request } from "node:http";
import { info } from "node:console";

if (cluster.isPrimary) {
  console.info(`Primary : ${process.pid}`);
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }

  cluster.addListener("exit", (worker) => {
    console.info(`Worker-${worker.id} (${worker.process.pid}) is exit`);
    cluster.fork();
  });
}

if (cluster.isWorker) {
  console.info(`Worker : ${process.pid}`);

  const server = http.createServer((request, response) => {
    response.write(`Response from process ${process.pid}`);
    response.end();
    process.exit();
  });

  server.listen(3000);
}
