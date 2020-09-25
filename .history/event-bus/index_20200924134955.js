const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const event = req.body;
  console.log("22323232");
  await axios.post("http://localhost:4000/events", event);
  await axios.post("http://localhost:4001/events", event);
  await axios.post("http://localhost:4002/events", event);
  await axios.post("http://localhost:4003/events", event);
  res.send({ status: "ok" });
});

app.listen(4005, () => {
  console.log("Event bus listenign on 4005");
});
