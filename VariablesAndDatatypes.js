// Variables
fullName = "Juhi Nagpure";
console.log(fullName);
age = 24;
console.log(age);
price = 99.99;
console.log(price);
a = null;
console.log(a);
y = undefined;
console.log(y);
isFollow = false;
console.log(isFollow);

// // let,const and var

// // var:variable can be re-declared and updated. A global scope variable.
var Name = "juhi";
console.log(Name);

// // let:variable cannot bise re-declared but can be updated. A block scope variable.
let boy = "tony stark";
let std = 5;
let totalPrice = 1000;

console.log(boy);

// // const:varible cannot be re-declared or updated. A block scope variable.
const pi = 3.14;
console.log(pi);

// // DataTypes

// // Number,String,Boolean,Undefined,Null,BigInt,symbol

let age = 24;
let fullName = "Tony stark";
let isFollow = true;
let x;
let y = null;
let z = BigInt("123");
let i = Symbol("Hello!");

//global scope variable
{
  var a = 5;
}
console.log(a);
