const express = require("express");

const app = express();

port = 4000;
hostName = "localhost";

app.listen(port, hostName, () => {
  console.log(`Server is working on http://${hostName}:${port}`);
});
