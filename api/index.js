const express = require("express");
const morgan = require("morgan");
require("dotenv").config();
const connectDB = require("./services/db");

const main = async () => {
  const app = express();
  connectDB();

  app.use(express.json());
  app.use(morgan("dev"));

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
  });
};

main().catch((err) => {
  console.log(err);
  process.exit(1);
});
