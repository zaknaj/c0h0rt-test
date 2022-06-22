const express = require("express");
const db = require("./db.js");

const app = express();
var cors = require("cors");

app.use(cors());

const port = 3001;

app.get("/", (req, res, next) => {
  var sql = "select * from merchants";
  var params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
