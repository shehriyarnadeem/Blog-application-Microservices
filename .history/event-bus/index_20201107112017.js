const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", async (req, res) => {
  console.log("over here");
  const event = req.body;
  events.push(event);
  try {
    await axios.post("http://posts-clusterip-srv:4000/events", event);
    await axios.post("http://comments-srv:4001/events", event);
    await axios.post("http://query-srv:4002/events", event);
    await axios.post("http://localhost:4003/events", event);

    res.send({ status: "ok" });
  } catch (e) {
    console.log(e);
  }
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log("Event listen on 4005");
});
