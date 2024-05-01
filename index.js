const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("<h1>HELLO WORLD</h1>");
});

app.listen(port, () => {
  console.log(`Server is working on port: ${port}`);
});
