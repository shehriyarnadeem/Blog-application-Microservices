const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const commentsByPostId = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id];
});

app.listen(4001, () => {
  console.log("Listening on 4001");
});
