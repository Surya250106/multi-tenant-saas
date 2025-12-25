const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

/**
 * =========================
 * MIDDLEWARE
 * =========================
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true
  })
);

app.use(morgan("dev"));

/**
 * =========================
 * ROUTES
 * =========================
 */
app.use("/api", require("./routes"));

/**
 * =========================
 * GLOBAL ERROR HANDLER
 * =========================
 */
app.use((err, req, res, next) => {
  console.error(err);

  return res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error"
  });
});

/**
 * =========================
 * 404 HANDLER
 * =========================
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

module.exports = app;
