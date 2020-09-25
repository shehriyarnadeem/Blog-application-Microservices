const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios");

app.listen(4003, () => {
  console.log("Moderation service is listening on 4003");
});
