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

// Some More Array Methods ->Important Array methods
// Map-
// creates a new array with the results of some operation.The value its callback returns are used to form new array

// arr.map(callbackFnx(value, index, array));

let newArr = arr.map((val) => {
  return val * 2;
});

//
let num = [67, 52, 39];
num.map((val) => {
  console.log(val);
});

// Filter Method
// Creates a new array of elements that give true for a condition/filter.
// Eg:all even elements

let newArray = arr.filter((val) => {
  return val % 2 === 0;
});

let arrays = [1, 2, 3, 4, 5, 6, 7];
let evenArr = arrays.filter((val) => {
  return val % 2 === 0;
});
console.log(evenArr);

// Reduce method
// performs some operations & reduces the array to a single value.it returns that single value.

let Arr = [1, 2, 3, 4];

const output = Arr.reduce((prev, curr) => {
  return prev + curr;
});
console.log(output);

// To print the largest No. in the array
let number = [5, 6, 2, 1, 101, 3];
const result = number.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});

console.log(result);

// Qs. We are given array of marks of students. Filter out of the marks of students that scored 90+.
let marks = [97, 64, 32, 49, 99, 96, 86];

let stuMarks = marks.filter((val) => {
  return val > 90;
});
console.log(stuMarks);

// Qs. Take a number n as input from user. Create an array of numbers from 1 to n.
// Use the reduce method to calculate sum of all numbers in the array.
// Use the reduce method to calculate product of all numbers in the array

let n = prompt("Enter a number:");

let userArr = [];

for (let i = 1; i <= n; i++) {
  userArr[i - 1] = i; //1(0),2(1),3(2),4(3)
}
console.log(userArr);

let Sum = userArr.reduce((res, curr) => {
  return res + curr;
});
console.log("Sum =", Sum);

let factorial = userArr.reduce((res, curr) => {
  return res * curr;
});
console.log("factorial=", factorial);
