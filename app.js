const http = require("http");
const fs = require("fs");
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("this is the homepage");
});

app.get("/contact", (req, res) => {
  res.send("this is the contact page");
});

app.get("/profile/:id", (req, res) => {
  res.send("you requested to see profile with the id of " + req.params.id);
});

app.listen(3001);

// const server = http.createServer((req, res) => {
//   console.log("request was made: " + req.url);
//   if (req.url === "/home" || req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     fs.createReadStream(__dirname + "/index.html").pipe(res);
//   } else if (req.url === "/contact-us") {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     fs.createReadStream(__dirname + "/contact.html").pipe(res);
//   } else if (req.url === "/api/ninjas") {
//     const ninjas = [
//       { name: "ryu", age: 29 },
//       { name: "yoshi", age: 32 },
//     ];
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(ninjas));
//   } else {
//     res.writeHead(404, { "Content-Type": "text/html" });
//     fs.createReadStream(__dirname + "/404.html").pipe(res);
//   }
// });
//
// server.listen(3001, "127.0.0.1");
// console.log("now listening to port 3001");
