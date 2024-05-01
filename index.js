const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("<h1>HOME</h1>");
});

app.post("/", (req, res) => {
  const userName = req.body.name;
});

app.listen(port, () => {
  console.log(`Server is working on port: ${port}`);
});
