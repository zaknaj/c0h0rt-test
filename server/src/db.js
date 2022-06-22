const data = require("./data.js");

var sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err?.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      `CREATE TABLE merchants (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            logoUrl text, 
            bannerUrl text,
            campaigns INTEGER
      )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          var insert =
            "INSERT INTO merchants (name, logoUrl, bannerUrl, campaigns) VALUES (?,?,?,?)";
          data.forEach((entry) => {
            db.run(insert, entry);
          });
        }
      }
    );
  }
});

module.exports = db;
