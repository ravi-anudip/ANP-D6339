var http = require('http')

http.createServer((req, res) => {
  
  res.writeHead(200, { 'content-type': 'text/html' })
  
  res.write("hello this is my first Server....")

  res.end();

}).listen(8081);

console.log("server is running on the prot 8081");