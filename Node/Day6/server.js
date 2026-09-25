var express = require('express')
var path = require('path')
var conn = require('./db_conn.js')


const app = express()

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true, limit: '2mb'}))


// app.get('/', (req, res) => {
//   const [rows] = conn.query('select * from user')
//   res.render('list',{users :rows })
// })

app.get('/', (req, res) => {
  conn.query('select * from user', (err, rows) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }
    res.render('list', { users: rows });
  });
});


app.get('/adduser', (req, res) => {
  
    res.sendFile(path.join(__dirname,'./views/add.html'))

})

app.post('/submit_form', (req, res) => {

  console.log(req.body);
  
  const { fname, lname, dob, gender } = req.body;

  conn.query("insert into user (fname,lname,dob,gender) value (?,?,?,?)",
    [fname, lname, dob, gender], (err, result) => {
      if (err) throw err;
      else res.send("<h1>User added in  the table....</h1>")
    }
  )
  
})

app.listen(8080, () => {
  console.log("server is running on the port 8080 ");
})