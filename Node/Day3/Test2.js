function div(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("divide by Zero..")
    } else {
     resolve(a/b) 
    }
  })
}

var ans = div(4, 0);
ans.then((res) => {
  console.log("Ans : "+res)
}).catch((err) => {
  console.error("Error : "+err )
})