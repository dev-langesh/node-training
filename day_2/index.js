const http = require("http");
const express = require("express");
const arr = [1, 2, 3, 4, 5];

const app = express();

function handleHttp(req, res) {
  if (req.method == "GET") {
    res.write(JSON.stringify(arr));

    res.end();
  }

  if (req.method == "POST") {
    const data = [];

    req.on("data", (chunk) => {
      data.push(chunk);
    });

    req.on("end", () => {
      console.log(data.toString("hex"));
    });

    res.end();
  }
}

const server = http.createServer(handleHttp);

server.listen(8000);
