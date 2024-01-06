// JavaScript Essentials Recap
// Var, Let, Const
var x = 10;
let y = 20;
const z = 30;

// Hoisting
console.log(a); // undefined
var a = 5;

// Arrow Functions
const add = (a, b) => a + b;

// Higher Order Functions
const multiplyBy = (factor) => (num) => num * factor;
const double = multiplyBy(2);

// Destructuring
const person = { name: "John", age: 30 };
const { name, age } = person;

// Logical Operators
const isAdult = age >= 18 && age <= 65;

// Array Methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);

// Event Listeners
document.getElementById("myButton").addEventListener("click", () => {
  console.log("Button clicked!");
});

// Asynchronous Operations
const fetchData = async () => {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Error Handling
try {
  // Code that might throw an error
  throw new Error("Oops! Something went wrong.");
} catch (error) {
  console.error("Caught an error:", error.message);
}
