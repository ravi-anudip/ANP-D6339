var fs  = require('fs')
import {add} from './math'

// fs.writeFileSync('demo.txt', "hello")
fs.appendFile('demo.txt', "\nWelcome to fs mudule...", (err) => {
  if (err) {
    console.error(err)
  } else {
    console.log ("append is complited..")
  }
})

// fs.readFile('demo.txt', 'utf8', (err, data) => {
//   if (err) throw err
//   console.log(data)
// })
















// const add = require('./math.js')
// const util = require('./util.js')

// import add  from './math.js'
// import {sub , mul ,div} from './util.js'

// var x = 10
// var y = 20

// console.log(add(x, y))

// console.log(sub(x,y))
// console.log(mul(x,y))
// console.log(div(x,y))






