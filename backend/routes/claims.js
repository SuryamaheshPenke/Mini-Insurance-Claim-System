const express = require("express");
const db = require("../db");
const router = express.Router();


function getClaimStatus(amount, fraud_score) {
  if (fraud_score > 0.7) return "Rejected";
  if (amount > 100000) return "Manual Review";
  return "Approved";
}


router.post("/", (req, res) => {
  const { claim_id, customer_name, amount, fraud_score } = req.body;

  
  if (!claim_id || !customer_name || amount == null || fraud_score == null) {
    return res.status(400).json({ error: "All fields are required" });
  }
  if (typeof customer_name !== "string") {
  return res.status(400).json({ error: "Customer name must be a string" });
}

  const status = getClaimStatus(amount, fraud_score);

  const query = `
    INSERT INTO claims (claim_id, customer_name, amount, fraud_score, status)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(query, [claim_id, customer_name, amount, fraud_score, status], function (err) {
    if (err) {
      if (err.message.includes("UNIQUE")) {
        return res.status(400).json({ error: "Claim ID already exists" });
      }
      return res.status(500).json({ error: "Database error" });
    }

    res.json({
      claim_id,
      status,
      message: `Claim ${status.toLowerCase()} successfully`
    });
  });
});

router.get("/", (req, res) => {
  db.all("SELECT * FROM claims ORDER BY created_at DESC", [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    res.json(rows);
  });
});
const nameRegex = /^[A-Za-z\s]+$/;

if (!nameRegex.test(customer_name)) {
  return res.status(400).json({
    error: "Customer name must contain only alphabets",
  });
}

module.exports = router;