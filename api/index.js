const express = require("express");
const morgan = require("morgan");
const { join } = require("path");
require("dotenv").config();
const connectDB = require("./services/db");

const main = async () => {
  const app = express();
  connectDB();

  app.use(express.json());
  app.use(morgan("dev"));

  app.use("/api/v1/admin", require("./routes/admin"));

  if (process.env.NODE_ENV == "production") {
    app.use(express.static(join(__dirname, "..", "client", "build")));
    app.get("/*", (req, res) =>
      res.sendFile(join(__dirname, "..", "client", "build", "index.html"))
    );
  }

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
  });
};

main().catch((err) => {
  console.log(err);
  process.exit(1);
});
