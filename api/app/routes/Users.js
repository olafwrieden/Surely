const express = require("express");
const { getUsers } = require("../controllers/User");
const router = express.Router();

/* Get all users */
router.get("/", getUsers);

module.exports = router;
