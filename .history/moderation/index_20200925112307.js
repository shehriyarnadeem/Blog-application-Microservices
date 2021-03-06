const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const app = express();
const axios = require("axios");

app.use(bodyParser.json());
app.post("/events", async (req, res) => {
  const body = req.body;
  const moderationId = randomBytes(4).toString("hex");
  if (body.type === "CommentCreated") {
    if (body.content !== "orange") {
      try {
        await axios.post("http://localhost:4005/events", {
          type: "CommentModerated",
          data: {
            id: moderationId,
            content: "hi",
            postId: body.postId,
            commentId: body.id,

            status: "approved",
          },
        });
      } catch (e) {
        console.log(e.message);
      }
    }
  }
});

app.listen(4003, () => {
  console.log("Moderation service is listening on 4003");
});
