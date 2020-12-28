const jwt = require("jsonwebtoken");

exports.giveToken = (user, res) => {
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
};
