const fs = require("fs");
const express = require("express");
const path = require("path");

// path
const dirPath = path.join(__dirname, "timestamps");
console.log("dirpath", dirPath);

// intiallizing express server
const app = express();

// fs.writeFile(`${dirPath}/date-time.txt`, timeStamp, (err) => {
//   console.log("file created");
// });

// middlewares
app.use(express.static("timestamps"));

// api's
app.get("/", (req, res) => {
  res.send("Hey i am sakthi. i am using nodejs server");
});

app.get("/static", (req, res) => {
  let time = new Date();
  let dateString = time.toUTCString().slice(0, -4);
  console.log(dateString);

  const timeStamp = `last created timeStamp : ${dateString}`;
  fs.writeFileSync(`${dirPath}/date-time.txt`, timeStamp, (err) => {
    console.log("file created");
  });

  res.sendFile(path.join(__dirname, "timestamps/date-time.txt"));
});

// set server to listen under port:5000
app.listen(5000, () => console.log("server start from 5000 port"));
