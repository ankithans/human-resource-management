const { validationResult } = require("express-validator");
const { giveToken } = require("../services/giveToken");
const { errorHandler } = require("../services/errorHandler");
const Admin = require("../models/admin");

// @route   POST api/v1/admin/login
// @dsc     Login a admin
// @access  Public
exports.loginAdmin = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return errorHandler(res, "Incorrect email", 400);
  }
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return errorHandler(res, "admin not found", 404);
    }
    if (admin.password != password) {
      return errorHandler(res, "incorrect password", 401);
    }
    giveToken(admin, res);
  } catch (err) {
    return errorHandler(res, "Server Error", 500);
  }
};
