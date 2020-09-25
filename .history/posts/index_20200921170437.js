const express = require("express");
const { randomBytes } = require("crypto");
import axios from "axios";
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
const posts = {};
app.get("/posts", (req, res) => {
  res.status(200).send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };
  await axios.post("http://localhost:4005/events", {
    type:
  });
  res.status(200).send(posts);
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
