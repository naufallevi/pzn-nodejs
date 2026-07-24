import net from "node:net";

const server = net.createServer((client) => {
  console.info("Client connected\n");

  client.addListener("data", (data) => {
    console.info(`Receive data ${data.toString()}`);
    client.write(`Hello Cak/Ning ${data.toString()}\r\n`);
  });
});

server.listen(3000, "localhost")
