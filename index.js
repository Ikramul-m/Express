const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("<h1>HOME</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>ABOUT </h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>CONTACT</h1>");
});

app.listen(port, () => {
  console.log(`Server is working on port: ${port}`);
});
