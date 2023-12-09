// Loops in JS
// Loops are used to execute a piece of code again and again

// Example of a for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Example of a while loop
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

// Example of a do-while loop
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

// Example of a for-of loop
const array = [1, 2, 3, 4, 5];
for (const value of array) {
  console.log(value);
}

// Example of a for-in loop
const person = { name: "John", age: 25, job: "Developer" };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Strings

// Creating Strings:
// You can create a string using single quotes (') or double quotes (").

let singleQuotedString = "Hello, World!";
let doubleQuotedString = "Hello, World!";

// String Concatenation:
// You can combine or concatenate strings using the + operator.

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: John Doe

// String Length:
// You can find the length of a string using the length property.

let greetings = "Hello, World!";
console.log(greetings.length); // Output: 13

// Accessing Characters:
// You can access individual characters in a string using square brackets and the character's index.
let greeting = "Hello, World!";
console.log(greeting[0]); // Output: H
console.log(greeting[7]); // Output: W
