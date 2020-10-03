require("dotenv-safe").config();
const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const path = require("path");

// Express App
const app = express();
app.use(cors());
app.use(helmet());
app.use(logger("dev"));

// Extract Environment Variables
const { NODE_ENV, PORT } = process.env;
const port = PORT || 9000;

if (NODE_ENV === "production") {
  console.info("ENVIRONMENT: Production");
}

// API Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Routes (in production, it falls back to React Router)
const router = express.Router();
// router.use("/auth", require("./app/routes/Auth"));
router.use("/users", require("./app/routes/Users"));
// router.use("/admin", require("./app/routes/Admin"));
// router.use("/evidence", require("./app/routes/Evidence"));

app.use("/api/v1", router);

// In Production, serve React build
if (NODE_ENV === "production") {
  // Serve Static Files
  app.use(express.static(path.join(__dirname, "../client/build")));
  console.log(path.join(__dirname, "../client/build", "index.html"));
  // Route all requests to client router
  app.get("*", function (_, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

app.listen(PORT, () => {
  console.info("----------");
  console.info(`🚀  API Server listening on port ${port}`);
  console.info("----------");
});

module.exports = app;
