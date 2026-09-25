var express = require("express")
var path = require("path")

const app = express()

app.use(express.urlencoded({ extended: true, limit: '2mb' }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send("<h3> home page</h3>");
})

app.get('/html-file', (req, res) => {
  // res.send(__dirname +"<br>"+__filename)

  res.sendFile(path.join(__dirname,"/public/form.html"))
})




app.get('/getform', (req, res) => {
  
  res.send(

    "<form action='/via-post' method='post' >"+
        "<input type='text' name='username' placeholder='Username' />"+
        "<input type='email' name='email' placeholder='email' />"+
        "<input type='submit'/>"+
    "</form>"

  );

})

app.get('/via-get', (req, res) => {
  
  const username= req.query['username']
  const email = req.query['email']
  
  res.send(
    `Username = ${username} , Email = ${email}`
  )

})

app.post('/via-post', (req, res) => {
  
  const username= req.body.username
  const email = req.body.email

  res.send(
    `Username = ${username} , Email = ${email}`
  )

})



app.listen(8080,()=>console.log("server is started at port 8080"))