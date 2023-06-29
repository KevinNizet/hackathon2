const argon2 = require("argon2");
require("dotenv").config();

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (req, res, next) => {
  argon2
    .hash(req.body.password, hashingOptions)
    .then((mdp) => {
      req.body.mdp = mdp;
      console.warn("hashedPassword de const hasPassWord", mdp);
      next();
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const verifyPassword = (req, res) => {
  argon2
    .verify(req.user.mdp, req.body.password)
    .then(() => {
      res.send("authentification verified").status(200);
    })

    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};


module.exports = {
  hashPassword,
  verifyPassword,
};
