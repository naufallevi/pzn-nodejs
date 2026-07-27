import https from "node:https";

const endpoint = "https://eo2mmnwa3p3g84a.m.pipedream.net";
const request = https.request(
  endpoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (response) => {
    response.addListener("data", (data) => {
      console.info(`Receive data : ${data.toString()}`);
    });
  },
);

const body = JSON.stringify({
  brands: "Suzuki",
  Type: " Splash",
});

request.write(body);
request.end();
