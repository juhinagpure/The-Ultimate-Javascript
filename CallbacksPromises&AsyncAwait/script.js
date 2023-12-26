// // Sync in JS
// // Synchronous
// // synchronous means the code runs in a particular sequence of instruction given in
// // the program.Each instruction waits for the previous instruction to complete its execution.
// // // console.log("one");
// // console.log("two");
// // console.log("three");

// // // Asynchronous
// //  Due to Synchronous programming,sometimes imp instructions get blocked due to some previous instructions,
// // which causes a delay in the UI.
// // Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.
// console.log("one");
// console.log("two");
// setTimeout(() => {
//   console.log("hello");
// }, 4000); //timeout
// console.log("three");
// console.log("four");

// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// }

// async function asyncCall() {
//   console.log("calling");
//   const result = await resolveAfter2Seconds();
//   console.log(result);
//   // Expected output: "resolved"
// }

// asyncCall();

// //

// const p = new Promise((res, rej) => {
//   res(1);
// });

// async function asyncReturn() {
//   return p;
// }

// function basicReturn() {
//   return Promise.resolve(p);
// }

// console.log(p === basicReturn()); // true
// console.log(p === asyncReturn()); // false

// // Callbacks
// // A callback is a function passed as an argument to another function.

// function sum(a, b) {
//   console.log(a + b);
// }
// function calculator(a, b, sumCallback) {
//   sumCallback(a, b);
// }
// calculator(1, 2, (a, b) => {
//   console.log(a + b);
// });

// // Nested if-else
// let age = 19;
// if (age >= 18) {
//   if (age >= 60) {
//     console.log("senior");
//   } else {
//     console.log("middle");
//   }
// } else {
//   console.log("child");
// }

// // Nested Loop
// for (let i = 0; i < 5; i++) {
//   let str = "";
//   for (let j = 0; j < 5; j++) {
//     str = str + j;
//   }
//   console.log(i, str);
// }

// // Callback Hell
// // Callback Hell:Nested callbacks stacked below one anotehr forming a pyramid structure.
// // (pyramid of Doom)

// // This style of programming becomes difficult to understand & manage

// function getData(dataId, getNextData) {
//   //2s
//   setTimeout(() => {
//     console.log("data", dataId);
//     console.log("success");
//     if (getNextData) getNextData();
//   }, 5000);
// }
// // getData(1, () => {
//   console.log("getting data2....");
//   getData(2, () => {
//     console.log("getting data3....");
//     getData(3, () => {
//       console.log("getting data4....");
//       getData(4);
//     });
//   });
// });

// data1
// data2
// data3

// Promises
// promise is for "eventual" completion of task.It is an object in JS.
// It is a solution to callback hell.

// let promise = new Promise((resolve, reject) => {});

// A javascript promise object can be:
// pending:the result is undefined
// Resolved:the result is a value(fulfilled)-resolve(result)
// Rejected:the result is an error object-reject(error)

//*resolve and reject are callbacks provided by JS
// let promise = new Promise((resolve, reject) => {
//   console.log("I am a promise");
//   resolve("Success");
//   // reject("some error occurred");
// });

// .then() & .catch()
// promise.then((res)=>{...})
// promise.catch((err)=>{..})

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("Success");
//     // reject("rejected network error");
//   });
// };
// let promise = getPromise();
// promise.then((res) => {
//   console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//   console.log("rejected", err);
// });

// Promise Chain
// function asyncFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");
//     }, 4000);
//   });
// }
// function asyncFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("fetching data1....");
// asyncFunc1().then((res) => {
//   console.log("fetching data2....");
//   asyncFunc2().then((res) => {});
// });

// // Async-Await
// // async function always returns a promise
// async function myFunc() {}

// // await pauses the execution of its surrounding async-
// // function until the promise is setled

// async function hello() {
//   console.log("hello");
// }

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("weather data");
//       resolve(200);
//     }, 2000);
//   });
// }
// async function getweatherData() {
//   await api(); //1st
//   await api(); //2nd
// }
//
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", dataId);
      resolve("success");
    }, 2000);
  });
}

async function getAllData() {
  console.log("getting data1....");
  await getData(1);
  console.log("getting data2....");
  await getData(2);
  console.log("getting data3....");
  await getData(3);
  console.log("getting data4....");
  await getData(4);
  console.log("getting data5....");
  await getData(5);
}

// IIFE:Immediately Invoked function Expression
// IIFE is a function that is called immediately as soon as it is defined.

// (fucntion(){
//   // ..
// })();

// (()=>{
//   //..
// })();

// (async ()=>{
//   //..
// }) ();

(async function getAllData() {
  console.log("getting data1....");
  await getData(1);
  console.log("getting data2....");
  await getData(2);
  console.log("getting data3....");
  await getData(3);
})();

(() => {
  // some initiation code
  let firstVariable;
  let secondVariable;
})();

// firstVariable and secondVariable will be discarded after the function is executed.
