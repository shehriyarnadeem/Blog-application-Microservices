const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const app = express();
const axios = require("axios");

app.use(bodyParser.json());
app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  const { status, content, postId, id } = data;

  if (type === "CommentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";
    await axios.post("http://localhost:4005/events", {
      type: "CommentModerated",
      data: {
        id,
        postId,
        status,
        content,
      },
    });

    await axios.post("http://localhost:4005", {
      type: "CommentUpdated",
      data: {
        id,
        postId,
        status,
        content,
      },
    });
    res.send({});
  }
});

app.listen(4003, () => {
  console.log("Moderation service is listening on 4003");
});
