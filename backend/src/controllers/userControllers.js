const models = require("../models");

const getUserByLoginWithPasswordAndPassToNext = (req, res, next) => {
  models.user
    .getUserByLogin(req.body)
    .then(([users]) => {
      if (users[0] != null) {
        req.user = users[0]; // eslint-disable-line prefer-destructuring
        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

module.exports = {
  getUserByLoginWithPasswordAndPassToNext,
};
