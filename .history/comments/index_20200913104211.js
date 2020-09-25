const express = require("express");
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const posts = {};
app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/posts/:id/comments", (req, res) => {});

app.listen(4001, () => {
  console.log("Listening on 4001");
});
