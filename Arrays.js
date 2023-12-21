// Arrays in JS
// Collection of items - linear
// Array - Mutable

let numbers = [97, 82, 75, 64, 36];
console.log(numbers);
console.log(numbers.length); //property

let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman"];
console.log(heroes);

// array javascript ke andar ek object hota hai.
// particular index pe jake hum apne value change kr skte hai.

//Looping over an Array
// Print all elments of an array.
//Loops - iterable(strings,objects,arrays)

// for loop
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

// for-of loop
for (let hero of heroes) {
  console.log(hero);
}

// Qs. For a given array with marks of students -> [85, 97, 44, 37, 76, 60] Find the average marks of the entire class.
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let value of marks) {
  sum = sum + value;
}
let avg = sum / marks.length;
console.log(`avg marks of the class=${avg}`);

// Qs. For a given array with prices of 5 items -> [250, 645, 300, 900, 50] All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
let items = [250, 645, 300, 900, 50];
i = 0;
for (let val of items) {
  let offer = val / 10;
  items[i] = items[i] - offer;
  console.log(`value after offer = ${items[i]}`);
  i++;
}

for (let i = 0; i < items.length; i++) {
  let offer = items[i] / 10;
  items[i] -= offer;
}
console.log(items);

// Methods in Array
// push(): Adds one or more elements to the end of an array.
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits); // Output: ['apple', 'banana', 'orange']

// pop(): Removes the last element from an array.
let fruitss = ["apple", "banana", "orange"];
let removedFruits = fruits.pop();
console.log(removedFruits); // Output: 'orange'
console.log(fruitss); // Output: ['apple', 'banana']

// shift(): Removes the first element from an array.
let fruitgroup = ["apple", "banana", "orange"];
let removedFruit = fruits.shift();
console.log(removedFruit); // Output: 'apple'
console.log(fruitgroup); // Output: ['banana', 'orange']

// unshift(): Adds one or more elements to the beginning of an array.
let fruitItem = ["banana", "orange"];
fruits.unshift("apple");
console.log(fruitItem); // Output: ['apple', 'banana', 'orange']

// splice(): Adds or removes elements from a specific index in an array.
let fruitsItem = ["apple", "banana", "orange"];
fruits.splice(1, 1, "grape", "kiwi");
console.log(fruitsItem); // Output: ['apple', 'grape', 'kiwi', 'orange']

// slice(): Returns a shallow copy of a portion of an array.
let fruitsItems = ["apple", "banana", "orange", "grape"];
let slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ['banana', 'orange']

// concat(): Joins two or more arrays and returns a new array.
let fruitsgroups = ["apple", "banana"];
let moreFruits = ["orange", "grape"];
let combined = fruitsgroups.concat(moreFruits);
console.log(combined); // Output: ['apple', 'banana', 'orange', 'grape']

let input = [1, "varsha", 2, "girish", 5, "juhi"];
let number = [];
let string = [];

// we need to extract no and string from input array into seperate array in javascript by using for of loop
for (let item of input) {
  if (typeof item === "number") {
    number.push(item);
  } else if (typeof item === "string") {
    string.push(item);
  }
}

console.log("number:", number);
console.log("string:", string);
console.log("string", string);
