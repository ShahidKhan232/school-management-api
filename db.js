const mysql = require("mysql2");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

// Add SSL configuration if enabled
if (process.env.DB_SSL === "true") {
  dbConfig.ssl = {
    ca: fs.readFileSync("./aiven-ca.pem"), // Path to the downloaded certificate
  };
}

const db = mysql.createConnection(dbConfig);

db.connect((err) => {
  if (err) {
    console.error("Database connection error:", err.message);
    process.exit(1);
  }
  console.log("Connected to Aiven MySQL database.");
});

module.exports = db;
