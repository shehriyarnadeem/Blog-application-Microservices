const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = {};
app.get("/posts", (req, res) => {
  res.send(posts);
});
app.post("/events", (req, res) => {
  const { type, data } = req.body;
  console.log("over here");
  if (type == "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }
  if (type === "CommentCreated") {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    console.log(post);
    post.comments.push({ id, content, status });
  }

  if (type === "CommentUpdated") {
    console.log("updated");
    const post = posts[postId];
    const comment = post.comments.find((comment) => comment.id === id);
    comment.status = status;
    comment.content = content;
  }
});

app.listen(4002, () => {
  console.log("Query Listening on 4002");
});
