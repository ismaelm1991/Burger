// Set up MySQL connection.
var mysql = require("mysql");

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
var connection = mysql.createConnection({
  host: "mwgmw3rs78pvwk4e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
  port: 3306,
  user: "ws6niq7b5bjmh3bn",
  password: "k0xq7eok1fhuszqq",
  database: "n74626x9s90z845o"
});
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;