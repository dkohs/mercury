const mysql = require('mysql2');

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Your MySQL username
  password: "rootroot", // Your MySQL password
  database: "mercury_db",
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database");
});

module.exports = { db };
