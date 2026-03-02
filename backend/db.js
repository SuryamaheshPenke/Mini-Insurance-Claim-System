const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./claims.db", (err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Connected to SQLite database.");
  }
});

db.run(`
CREATE TABLE IF NOT EXISTS claims (
  claim_id TEXT PRIMARY KEY,
  customer_name TEXT NOT NULL,
  amount REAL NOT NULL,
  fraud_score REAL NOT NULL,
  status TEXT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
`);

module.exports = db;