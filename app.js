const express = require("express");
const app = express();

const data = require("./data");

app.get("/potatoes", (req, res) => {
  res.json(data);
});

app.listen(8000, () => {
  console.log("This app is running on localhost:8000");
});
