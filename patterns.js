// 1. Right Triangle Pattern
// for (let i = 0; i < 5; i++) {
//   let row = "";
//   for (let j = 0; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// 2.Inverted Right Triangle Pattern
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5 - i; j++) {
    row += "* ";
  }
  console.log(row);
}

for (let i = 1; i <= 5; i++) {
  console.log(" * ".repeat(i));
}

// 3.Diamond Pattern
for (let i = 1; i <= 5; i++) {
  let Diamond = " ".repeat(5 - i);
  for (let j = 1; j <= i; j++) {
    Diamond += j + " ";
  }
  console.log(Diamond);
}

for (let i = 4; i >= 1; i--) {
  let Diamond = " ".repeat(5 - i);
  for (let j = 1; j <= i; j++) {
    Diamond += j + " ";
  }
  console.log(Diamond);
}

// 4.Write a for loop that prints the numbers from 1 to 5.
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 5.Use a for loop to print the numbers from 5 to 1.
for (let i = 5; i >= 1; i--) {
  console.log(i);
}

// 6.Write a for loop that prints the even numbers from 2 to 10.
for (let i = 2; i <= 10; i += 2) {
  console.log(i);
}

// 7.Use a for loop to print the odd numbers from 1 to 9.
for (let i = 1; i <= 9; i += 2) {
  console.log(i);
}

// 8.Create a multiplication table for the number 3 using a for loop. Print the result for each iteration (3 x 1, 3 x 2, ..., 3 x 10).
for (let i = 1; i <= 10; i++) {
  const result = 3 * i;
  console.log(`3 x ${i} = ${result}`);
}

// 9.Write a for loop to calculate the sum of numbers from 1 to 5.
let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum += i;
}

console.log("The sum is:", sum);

// 10.Given a string, use a for loop to print the characters in reverse order.
const String = "Hey Juhi!";

for (let i = String.length - 1; i >= 0; i--) {
  console.log(String[i]);
}

// 11.Given an array of numbers [2, 4, 6, 8, 10], use a for loop to calculate and print the sum of the elements.
let arr = [2, 4, 6, 8, 10];
let add = 0;
for (let i = 0; i < arr.length; i++) {
  add += arr[i];
}
console.log("The sum is:", add);

// 12.Print the first 10 numbers in the Fibonacci sequence using a for loop.
let first = 0;
let second = 1;

for (let i = 0; i < 10; i++) {
  console.log(first);
  [first, second] = [second, first + second];
}
