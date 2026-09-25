var mysql = require('mysql2')


var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database:'dummy'
})

conn.connect((err) => {
  if (err) throw err;
  console.log("database connection is created.....")
})

module.exports = conn