const express = require("express");
const app = express();
const userController = require("./users.controller");

app.post("/getUsers", userController);
