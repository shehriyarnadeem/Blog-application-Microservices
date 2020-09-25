const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const event = req.body;

  try {
    await axios.post("http://localhost:4002/events", event);
    await axios.post("http://localhost:4000/events", event);
    await axios.post("http://localhost:4003/events", event);
    await axios.post("http://localhost:4001/events", event);

    res.send({ status: "ok" });
  } catch (e) {
    console.log(e);
  }
});

app.listen(4005, () => {
  console.log("Event listen on 4005");
});
