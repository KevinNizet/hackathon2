const express = require("express");

const router = express.Router();

const phoneControllers = require("./controllers/phoneControllers");
const userControllers = require("./controllers/userControllers");

const { hashPassword, verifyPassword } = require("./auth");

router.get("/phone", phoneControllers.browse); // OK
router.get("/phone/:id", phoneControllers.read); // OK
router.put("/phone/:id", phoneControllers.edit); // OK
router.post("/phone", phoneControllers.add); // OK

router.get("/details/:id", phoneControllers.read);

router.post(
  "/api/login",
  userControllers.getUserByLoginWithPasswordAndPassToNext,
  hashPassword,
  verifyPassword
);

router.get("/user", userControllers.browse); // OK
router.get("/user/:id", userControllers.read); // OK
router.post("/api/user", hashPassword, userControllers.postUser); // OK

// pour la route post api/users permettant d'enregistrer un nouvel utilisateur
// utilisater hashPassword importé en haut

module.exports = router;
