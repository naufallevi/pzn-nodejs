import dns from "node:dns/promises"

const ip = await dns.lookup("www.ea.com")

console.info(ip);
console.info(ip.address);
console.info(ip.family);
