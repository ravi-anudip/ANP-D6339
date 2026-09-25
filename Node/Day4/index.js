// var http = require("http")

// http.createServer((req, res) => {
  
//   console.log(req.url);

//   if (req.url === "/") {
//     res.write("home page");
//     res.end();
//   } else if (req.url === "/about") {
//     res.write("about page")
//     res.end()
//   }else if (req.url === "/contect") {
//     res.write("contect page")
//     res.end()
//   }
  

// }).listen(8080);












var express = require("express")

const app = express()


app.get( (req, res) => {
 
  res.send("<h1> home page </h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>about Page..</h1>")
})

app.get("/users", (req, res) => {
  res.send([
    {
      id: 1,
      name: "jai"
    }, {
      id: 2,
      name: "rohit"
    }, {
      id: 3,
      name: "mohan"
    }, {
      id: 4,
      name: "manoj"
    }
    
  ])
})

app.get("/users/:id-:name", (req, res) => {

  var id = req.params.id
  var name= req.params.name
  res.send(`<h1>Id = ${id} , Name = ${name}</h1>`)
})


app.get("/find", (req, res) => {
  
  var id = req.query.id;
  var name = req.query.name;

  res.send(`Id = ${id} , Name = ${name}`);
})



app.listen(8000, () => console.log("server started....."));