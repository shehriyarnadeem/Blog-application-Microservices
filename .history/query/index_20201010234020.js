const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = {};

const handleEvent = (type, data) => {
  if (type == "PostCreated") {
    console.log("Received PostCreated on query");
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }
  if (type === "CommentCreated") {
    console.log("Received CommentCreated on query");
    const { id, content, postId, status } = data;

    const post = posts[postId];
    console.log(post);
    post.comments.push({ id, content, status });
  }

  if (type === "CommentUpdated") {
    console.log("Received CommentUpdated on query");

    const { postId, status, content, id } = data;
    const post = posts[postId];
    const comment = post.comments.find((comment) => comment.id === id);
    comment.status = status;
    comment.content = content;
  }
};
app.get("/posts", (req, res) => {
  res.send(posts);
});
app.post("/events", (req, res) => {
  const { type, data } = req.body;
  handleEvent(type, data);
  res.send({});
});

app.listen(4002, async () => {
  console.log("Query Listening on 4002");
  const res = await axios.get("http://event-srv:4005/events");

  for (let event of res.data) {
    console.log("Processing event :", event.type);
    handleEvent(event.type, event.data);
  }
});
