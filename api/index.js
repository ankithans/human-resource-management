const express = require("express");
const morgan = require("morgan");
require("dotenv").config;

const main = async () => {
  const app = express();

  app.use(express.json());
  app.use(morgan("dev"));

  app.get("/", (req, res) => {
    return res.status(200).json({
      message: "server is up",
    });
  });

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
  });
};

main().catch((err) => {
  console.log(err);
  process.exit(1);
});
