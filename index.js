const express = require("express");
const path = require("path");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  console.log(path.join(__dirname + "/index.html"));
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/", (req, res) => {
  const userName = req.body.name;
});

app.listen(port, () => {
  console.log(`Server is working on port: ${port}`);
});
