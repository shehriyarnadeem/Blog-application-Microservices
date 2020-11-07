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
    await axios.post("http://event-srv:4005/events", {
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

app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  const { status, content, postId, id } = data;
  if (type === "CommentModerated") {
    console.log("Received CommentModerated on comments");
    const comments = commentsByPostId[postId];
    const comment = comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;
    await axios.post("http://event-srv:4005/events", {
      type: "CommentUpdated",
      data: {
        id,
        postId,
        status,
        content,
      },
    });
  }
  res.send({});
});

app.listen(4001, () => {
  console.log("Comments on 4001");
});
