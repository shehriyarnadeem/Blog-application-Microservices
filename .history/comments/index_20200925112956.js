const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const axios = require("axios");
app.use(cors());
app.use(bodyParser.json());
const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId || []);
});

app.post("/posts/:id/comments", async (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content, status: "pending" });
  commentsByPostId[req.params.id] = comments;
  try {
    await axios.post("http://localhost:4005/events", {
      type: "CommentCreated",
      data: {
        id: commentId,
        content,
        postId: req.params.id,
        status: "pending",
      },
    });
  } catch (e) {
    console.log(e);
  }
  res.status(201).send(commentsByPostId);
});

app.post("/events", (req, res) => {
  console.log("Received Event on comments service", req.body);
  res.send({});
});

app.listen(4001, () => {
  console.log("Listening on 4001");
});
