import net from "node:net";

const client = net.createConnection({
  port: 3000,
  host: "localhost",
});

client.on("data", (data) => {
  console.info(`receive data from ${data.toString()}`);
});

setInterval(() => {
  client.write(`${process.argv[2]}\r\n`);
}, 2000);
