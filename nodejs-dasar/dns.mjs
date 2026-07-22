import { info } from "console";
import dns from "dns";
import dnsPromises from "dns/promises";

function callback(err, ip, family) {
  console.info(ip);
  console.info(family);
}

dns.lookup("www.rockstargames.com", callback)

const ip = await dnsPromises.lookup("www.ea.com")
console.info(ip);
console.info(ip.address);
console.info(ip.family);
