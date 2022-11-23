// Promise: It is an Object that returns a value that hope to recieve on future.
// It has three states.
// 1. Pending state
// 2. Fullfilled
// 3. Rejected state

// Promise is well suited for Asynchronous Operation: Example is API

function sayHi() {
  return new Promise((resolve, reject) => {
    const err = false;
    console.log("This is Pending state");
    setTimeout(() => {   
        if (!err) {                 // Api Call
            resolve("Ok Ankur! lets meet");
          } else {
            reject("Sorry I am Busy");
          }    
    }, 5000);

    
  });
}

// console.log(sayHi());

// Lets consume the Promise (Handle the promise porperly)

sayHi()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
