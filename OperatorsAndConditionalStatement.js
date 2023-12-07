// Arithmetic operators
let a = 5;
let b = 2;

console.log("a = ", a, "& b = ", b);
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ** b = ", a ** b);

// Unary Operator
console.log("++a=", ++a);
console.log("a++=", a++);
console.log(a);

console.log("--a=", --a);
console.log("a--=", a--);
console.log(a);

// Assignment Operator

a += 4; // a=a+4
console.log("a =", a);

a -= 4; // a=a-4
console.log("a = ", a);

a *= 4;
console.log("a = ", a);

a /= 4;
console.log("a = ", a);

// Conditional Statements
//  - To implement some condition in the code

// If statement
let color;
if (mode === "darl-mode") {
  color = "black";
}
// If-else Statement
let colors;
if (mode === "dark-mode") {
  color = "black";
} else {
  color = "white";
}

// else-if statement
if (age < 18) {
  console.log("junior");
} else if (age > 60) {
  console.log("senior");
} else {
  console.log("middle");
}
