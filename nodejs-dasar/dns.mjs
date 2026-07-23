import dns from "dns";

function callback(err, ip, family) {
  console.info(ip);
  console.info(family);
}

dns.lookup("www.rockstargames.com", callback)