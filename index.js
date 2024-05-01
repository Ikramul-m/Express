const express = require("express");

const app = express();

const PORT = 4000;
const hostName = "localhost";

app.arguments("/");

app.listen(PORT, hostName, () => {
  console.log(`Server is working on http://${hostName}:${PORT}`);
});
