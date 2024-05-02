const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require('./UserRouter')

const { emit } = require("process");


const app = express();

const PORT = 4000;
const hostName = "localhost";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(router)

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// app.post("/",);

app.listen(PORT, hostName, () => {
  console.log(`Server is working on http://${hostName}:${PORT}`);
});
