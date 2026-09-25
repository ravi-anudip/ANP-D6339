var mysql = require('mysql2')

const conn = mysql.createConnection({
  host: "localhost",
  user: 'root',
  password: 'root',
  database: 'dummy'
})

conn.connect((err) => {
  if (err) {
    throw err
  } else {
    console.log("database connected .....")
  }
})

module.exports = conn