const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios");

app.use(bodyParse.json());
app.post("/events", async (req, res) => {
  const body = req.body;

  if (body.type === "CommentCreated") {
    if (body.content !== "orange") {
      await axios.post("http://localhost:4005/events", {
        type: "CommentModerated",
        data: {
          id: body.id,
          content: "hi",
          postId: body.postId,

          status: "approved",
        },
      });
    }
  }
});

app.listen(4003, () => {
  console.log("Moderation service is listening on 4003");
});
