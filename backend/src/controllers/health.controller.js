const db = require("../config/database");

exports.healthCheck = async (req, res) => {
  try {
    await db.query("SELECT 1");

    return res.status(200).json({
      status: "ok",
      database: "connected"
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      database: "disconnected"
    });
  }
};
