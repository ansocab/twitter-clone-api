const express = require("express");
const router = express.Router();
const { getAllUsers, getOneUser, getOneUserMessages, createUser, getRandomUser } = require("../controllers/users");

router.get("/", getAllUsers);
router.get("/me", getRandomUser);
router.get("/:id", getOneUser);
router.get("/:id/messages", getOneUserMessages);
router.post("/", createUser);

module.exports = router;
