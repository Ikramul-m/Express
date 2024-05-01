const express = require("express");

const app = express();

const PORT = 4000;
const hostName = "localhost";

app.get("/", (req, res) => {
  res.send("<h1>HELLO WORLD</h1>");
});

app.post("/",(req,res) => {
  
})

app.listen(PORT, hostName, () => {
  console.log(`Server is working on http://${hostName}:${PORT}`);
});
