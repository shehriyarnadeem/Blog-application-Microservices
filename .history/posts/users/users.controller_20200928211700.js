const userService = require("./users.service");

module.exports = {
  getUsers(req, res) {
    const body = res.body;
    userService(body, (err, data) => {
      if (err) {
        res.status(400).send(err);
      }

      res.status(200).send({ success: 1, data });
    });
  },
};
