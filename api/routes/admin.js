const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const Auth = require("../middlewares/auth");
const {
  loginAdmin,
  addEmployee,
  getAllEmployees,
} = require("../controllers/admin");

router
  .route("/login")
  .post(
    body("email").isEmail().withMessage("please Enter a valid email"),
    loginAdmin
  );

router.route("/addEmployee").post(Auth, addEmployee);
router.route("/getAllEmployees").get(Auth, getAllEmployees);

module.exports = router;
