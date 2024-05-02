const express = require("express");
const path = require("path");

const app = express();

const PORT = 4000;
const hostName = "localhost";

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/api/v1/login", (req, res) => {
  // const usename = req.body.name;
  console.log("name");
});

app.listen(PORT, hostName, () => {
  console.log(`Server is working on http://${hostName}:${PORT}`);
});
