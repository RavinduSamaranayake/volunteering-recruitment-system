const express = require("express");
const router = express.Router();
const Event = require("../models/event");
const SelectEvent = require("../models/selectevent");
const User = require("../models/user");
const config = require("../config/keys");

router.get("/dashboard", (req, res) => {
  console.log("wada");
});

module.exports = router;