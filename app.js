const express = require("express");
const app = express();

const data = require("./data");

app.get("/potatoes", (req, res) => {
  res.json(data);
});

app.get("/potatoes/:potatoId", (req, res) => {
  const { potatoId } = req.params;
  const potatoFound = data.find((potato) => potato.id === +potatoId);
  if (potatoFound) {
    res.json(potatoFound);
  } else {
    res.status(404).json({ message: "Potato not found" });
  }
});

app.listen(8000, () => {
  console.log("This app is running on localhost:8000");
});
