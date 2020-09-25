const express = require("express");
const bodyParser = require("body-parser");
const app = express().router;
const axios = require("axios");

app.post("/events", (req, res) => {
  const body = req.body;

  if (body.type === "CommentCreated") {
    if (body.content !== "orange") {
      const data = {
        id: body.id,
        content: "hi",
        postId: body.postId,
        type: "CommentModerated",
        status: "approved",
      };
      await axios.post("http://localhost:4005/events", {
    type: "CommentCreated",
    data: {
      id: commentId,
      content,
      postId: req.params.id,
    },
  });
    }
  }
});

app.listen(4003, () => {
  console.log("Moderation service is listening on 4003");
});
