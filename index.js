const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`<div style="text-align: center;"> <h1>Hi there, I'm just a sample web application to test docker</h1></div>`);
});

app.listen(8000, () => {
  console.log("App running on: 8000");
});
