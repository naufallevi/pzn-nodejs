import { URL } from "node:url";

const link = new URL("https://www.take2games.com/list-games?name=GTA");

// console.info(link);
console.info(link.href);
console.info(link.protocol);
console.info(link.host);
console.info(link.hostname);
console.info(link.pathname);
console.info(link.searchParams);

console.info("===---===---===");
link.host = "www.rockstar.com";
link.searchParams.append("Genre", "Open World")

console.info(link.href);
console.info(link.protocol);
console.info(link.host);
console.info(link.hostname);
console.info(link.pathname);
console.info(link.searchParams);