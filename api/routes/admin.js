const express = require("express");
const router = express.Router();

const { loginAdmin } = require("../controllers/admin");

router.route("/login").post(loginAdmin);

module.exports = router;
