const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { emit } = require("process");

const app = express();

const PORT = 4000;
const hostName = "localhost";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/api/v1/register", (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  res.json({
    success: true,
  });
});

app.listen(PORT, hostName, () => {
  console.log(`Server is working on http://${hostName}:${PORT}`);
});
