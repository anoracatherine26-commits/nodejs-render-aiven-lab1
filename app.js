const express = require("express");
const mysql = require("mysql2");

const app = express();

const db = mysql.createConnection({
  host: "nodejs-mysql-lab-anoracatherine26-5ffe.g.aivencloud.com",
  user: "avnadmin",
  password: "AVNS_ypBVZlXcXYxiTCekf--",
  database: "defaultdb",
  port: "28066",
});

app.get("/", (req, res) => {
  db.query("SELECT NOW()", (err, result) => {
    if (err) {
      res.send("Database connection failed");
    } else {
      res.send("Database Connected Successfully: " + result[0]["NOW()"]);
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
