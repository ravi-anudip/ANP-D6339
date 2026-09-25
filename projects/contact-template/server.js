var express = require('express')
var db_conn = require('./db_conn')
var path = require('path')

const app = express()

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true, limit: '2mb' }))
app.use(express.static("public"));

app.get('/',(req,res)=>{
   db_conn.query('SELECT * FROM contacts ORDER BY id DESC', (err, results) => {
    if (err) {
      console.error(err)
      return res.status(500).send('Database error')
    }
    res.render('index', { contacts: results });
  })
})

app.get('/show-contact/:id', (req, res) => {
  const id = req.params.id;
  db_conn.query('SELECT * FROM contacts WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error(err)
      return res.status(500).send('Database error')
    }
    if (results.length === 0) return res.status(404).send('Contact not found')
    res.render('show-contact', { contact: results[0] });
  })
})

app.get('/add-contact', (req, res) => {
  res.render('form', { contact: null });
})

app.post('/add-contact', (req, res) => {
  const { first_name, last_name, email, phone, address } = req.body;
  const sql = `INSERT INTO contacts (first_name, last_name, email, phone, address)
               VALUES (?, ?, ?, ?, ?)`;
               db_conn.query(sql, [first_name, last_name, email, phone, address], (err) => {
                 if (err) {
                   console.error(err)
                   return res.status(500).send('Error saving contact')
    }
    res.redirect('/');
  })
})

app.get('/update-contact/:id', (req, res) => {
  const id = req.params.id;
  db_conn.query('SELECT * FROM contacts WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error(err)
      return res.status(500).send('Database error')
    }
    if (results.length === 0) return res.status(404).send('Contact not found')
    res.render('form', { contact: results[0] });
  })
})

app.post('/update-contact/:id', (req, res) => {
  const id = req.params.id;
  const { first_name, last_name, email, phone, address } = req.body;
  const sql = `UPDATE contacts
  SET first_name = ?, last_name = ?, email = ?, phone = ?, address = ?
               WHERE id = ?`;
  db_conn.query(sql, [first_name, last_name, email, phone, address, id], (err) => {
    if (err) {
      console.error(err)
      return res.status(500).send('Error updating contact')
    }
    res.redirect('/');
  })
})

app.get('/delete-contact/:id', (req, res) => {
  const id = req.params.id;
  db_conn.query('DELETE FROM contacts WHERE id = ?', [id], (err) => {
    if (err) {
      console.error(err)
      return res.status(500).send('Error deleting contact')
    }
    res.redirect('/');
  })
})

app.listen(8080, () => { console.log('server is started at port 8080..') })
