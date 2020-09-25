const express = require("express");
const { randomBytes } = require("crypto");
const axios = require("axios");
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

  try {
    await axios.post("http://localhost:4005/events", {
      type: "PostCreated",
      data: {
        id,
        title,
      },
    });
  } catch (e) {
    console.log(e);
  }

  res.status(200).send(posts);
});

app.post("/events", (req, res) => {
  console.log("Received Event on posts service", req.body.type);
  res.send({});
});
app.listen(4000, () => {
  console.log("Posts on 4000");
});
