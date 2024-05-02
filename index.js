const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const PORT = 4000;
const hostName = "localhost";
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/api/v1/login", (req, res) => {
  // const usename = req.body.name;
  res.send("<h1>Done</h1>");
  // console.log("name");
  console.log(req.body);
});

app.listen(PORT, hostName, () => {
  console.log(`Server is working on http://${hostName}:${PORT}`);
});
