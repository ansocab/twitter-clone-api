const express = require("express");
const router = express.Router();
const { getAllMessages, getOneMessage, createMessage } = require("../controllers/messages");

router.get("/", getAllMessages);
router.get("/:id", getOneMessage);
router.post("/", createMessage);

module.exports = router;
