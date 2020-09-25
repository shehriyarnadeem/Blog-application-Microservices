const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const posts = {};
app.get("/posts", (req, res) => {});
app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type == "PostCreated") {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
    console.log(posts, "post");
  }
  if (type === "CommentCreated") {
    const { id, content, postId } = data;
    console.log(id, "id");
    const post = posts[postId];
    post.comments.push({ id, content });
    console.log(posts, "comment");
  }
});
app.listen(4002, () => {
  console.log("Listening on 4002");
});
