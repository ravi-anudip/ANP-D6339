var express = require('express')
var db_conn = require('./db_conn')

const app = express()


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  db_conn.query('select * from contacts', (err, result) => {

    if (err) {
      console.error(err);
      return res.status(500).send('data error')
    }
      res.render('index',{contacts : result})
    })
    
})


app.listen(8080,()=>{console.log('server started on port 8080...')})