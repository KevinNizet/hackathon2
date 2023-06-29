const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const userControllers = require("./controllers/userControllers");

const { /* hashPassword, */ verifyPassword } = require("./auth");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.post(
  "/api/login",
  userControllers.getUserByLoginWithPasswordAndPassToNext,
  verifyPassword
);

router.get("/user", userControllers.browse);
router.get("/user/:id", userControllers.read);
// router.post("/api/user", hashPassword, userControllers.postUser);

// pour la route post api/users permettant d'enregistrer un nouvel utilisateur
// utilisater hashPassword importé en haut

module.exports = router;
