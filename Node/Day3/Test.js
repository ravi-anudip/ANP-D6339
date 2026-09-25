const myPromise = new Promise((resolve, reject) => {

                          let success = false; 
                          if (success) {
                            resolve("Operation succeeded!");
                          } else {
                            reject("Operation failed!");
                          }
                    });

myPromise
.then((result) => {
 console.log("Success:", result);
})
.catch((error) => {
 console.error("Error:", error);
});
