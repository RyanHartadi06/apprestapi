const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "apprestapi",
});
conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql Connect");
});

module.exports = conn;
