
const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database.sqlite", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    console.log("Connected to SQLite database.");
    db.run(
      `CREATE TABLE IF NOT EXISTS tutorials (
         id INTEGER PRIMARY KEY AUTOINCREMENT,
         title TEXT,
         description TEXT,
         published INTEGER DEFAULT 0
       )`
    );
  }
});

module.exports = db;
