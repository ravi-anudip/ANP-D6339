const fs = require('fs').promises;

console.log("Starting file operations...");
var p1 = fs.readFile('file1.txt', 'utf8')
  
var p2 =p1.then(data1 => {
    console.log("File1 content:", data1);
    return fs.readFile('file2.txt', 'utf8');
}).catch((err) => {
    console.error("Error reading files:", err);
  })
  
  var p3 =p2.then(data2 => {
    console.log("File2 content:", data2);
    return fs.readFile('file3.txt', 'utf8');
 }).catch((err) => {
    console.error("Error reading files:", err);
  })

p3.then(data3 => {
    console.log("File3 content:", data3);
 })
 .catch(err => {
    console.error("Error reading files:", err);
 });


console.log("File operations triggered...");