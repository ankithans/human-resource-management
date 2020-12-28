const jwt = require("jsonwebtoken");
const Admin = require("../models/admin");

// @route   POST api/v1/admin/login
// @dsc     Login a admin
// @access  Public
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });
    console.log(admin);
    if (!admin) {
      return res.status(404).json({
        success: false,
        error: "admin not found",
      });
    }
    if (admin.password != password) {
      return res.status(401).json({
        success: false,
        error: "incorrect password",
      });
    }
    giveToken(admin, res);
  } catch (err) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

function giveToken(user, res) {
  const payload = {
    user: {
      id: user.id,
    },
  };

  jwt.sign(
    payload,
    process.env.JWT_SECRET,
    {
      expiresIn: 360000000,
    },
    (err, token) => {
      if (err) throw err;

      return res.status(200).json({
        success: true,
        token: token,
        userId: user.id,
      });
    }
  );
}
