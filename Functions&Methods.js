// Functions in JS
// Block of code that performs a specific TextTrackList,can be invoked whenever needed
// function params -> like local variables -> block scope

// Function Definition
function functionName() {
  //do some work
}

function functionName(param1, param2) {
  //do some work
}

// Function Call
functionName();

//
function myFunctions() {
  console.log("Welcome to JavaScript");
  console.log("We are learning JS:)");
}
myFunctions();

function myFunction(msg) {
  //parameter -> input
  console.log(msg);
}
myFunction("I love JS");

//Function -> 2numbers , sum

function sum(x, y) {
  //local variables->scope
  s = x + y;
  return s;
}
let val = sum(3, 4);
console.log(val);

//
function add(a, b, c) {
  s = a + b + c;
  return s;
}
let value = add(2, 3, 5);
console.log(value);

// Arrow Functions
//Compact way of writing a function

const functionNames = (param1, param2) => {
  //do some work
};

//Sum Function
function sum(a, b) {
  return a + b;
}

const arrrowSum = (a, b) => {
  console.log(a + b);
};

//Multiplication Function
function mul(a, b) {
  return a * b;
}
const arrowMul = (a, b) => {
  console.log(a * b);
};

const printHello = () => {
  console.log("HELLO");
};

// Q.s Create a function using the “function” keyword that takes a String as an argument & returns the number of vowels in the string
function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      count++;
    }
  }

  return count;
}

//Q.s Create an arrow function to perform the same task.

const CountVow = (str) => {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      count++;
    }
  }

  return count;
};

// forEach Loop in Arrays
// arr.forEach(callBackFunction)
// callbackFunction:here,it is a function to execute for each element in the array
// Higher order function/methods
// A callback is a function passed as an argument to another function.

// arr.forEach((val) => {
//   console.log(val);
// });
// value,index,array this 3 parameters are used in forEach loop.

let arr = [1, 2, 3, 4, 5];
arr.forEach((val) => {
  console.log(val);
});

let array = ["pune", "Nagpur", "delhi"];
array.forEach((val) => {
  console.log(val);
});

//Q.s For a given array of numbers,print the square of each value using forEach loop.
let nums = [2, 3, 4, 5, 6];
nums.forEach((num) => {
  console.log(num * num); //num**2
});
