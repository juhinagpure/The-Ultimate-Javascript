// Sync in JS
// Synchronous
// synchronous means the code runs in a particular sequence of instruction given in
// the program.Each instruction waits for the previous instruction to complete its execution.
// // console.log("one");
// console.log("two");
// console.log("three");

// // Asynchronous
//  Due to Synchronous programming,sometimes imp instructions get blocked due to some previous instructions,
// which causes a delay in the UI.
// Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.
console.log("one");
console.log("two");
setTimeout(() => {
  console.log("hello");
}, 4000); //timeout
console.log("three");
console.log("four");

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // Expected output: "resolved"
}

asyncCall();

//

const p = new Promise((res, rej) => {
  res(1);
});

async function asyncReturn() {
  return p;
}

function basicReturn() {
  return Promise.resolve(p);
}

console.log(p === basicReturn()); // true
console.log(p === asyncReturn()); // false
