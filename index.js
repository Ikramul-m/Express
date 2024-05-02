const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const PORT = 4000;
const hostName = "localhost";
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/api/v1/userData", (req, res) => {
  res.json({
    name: "Ikram",
    email: "kram@gamil.com",
    password: "password"
  })
});

app.post("/api/v1/login", (req, res) => {
  // const usename = req.body.name;
  res.send(`<h2>Name: ${req.body.name}</h2> <h2>Email: ${req.body.email}</h2>`);
  // console.log("name");
  console.log(req.body);
});

app.listen(PORT, hostName, () => {
  console.log(`Server is working on http://${hostName}:${PORT}`);
});
