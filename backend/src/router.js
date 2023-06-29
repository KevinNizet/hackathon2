const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");

const { hashPassword, verifyPassword } = require("./auth");

router.get("/phone", itemControllers.browse);
router.get("/phone/:id", itemControllers.read);
router.put("/phone/:id", itemControllers.edit);
router.post("/phone", itemControllers.add);
router.delete("/phone/:id", itemControllers.destroy);

router.post(
  "/api/login",
  userControllers.getUserByLoginWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/user", userControllers.browse); // OK
router.get("/user/:id", userControllers.read); // OK
router.post("/api/user", hashPassword, userControllers.postUser); // OK

// pour la route post api/users permettant d'enregistrer un nouvel utilisateur
// utilisater hashPassword importé en haut

module.exports = router;
