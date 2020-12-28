const express = require("express");
const { body } = require("express-validator");
const router = express.Router();

const { loginAdmin } = require("../controllers/admin");

router
  .route("/login")
  .post(
    body("email").isEmail().withMessage("please Enter a valid email"),
    loginAdmin
  );

module.exports = router;
