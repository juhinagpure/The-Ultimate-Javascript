console.log("Hello");
alert("Hii guys");

// Window Object
// The window object represents an open window in a browser.It is brower,'s object(not javacsrip's) & is automatically created by browser.
// It is a global object with the lots of properties and methods.

// What is DOM?
// when a web page is loaded,the browser creates a Documnet Object Model(DOM) of the page.

console.log(document.body);

// DOM Manipulation
// 1.Selecting with id
// document.getElementById("myID");
let heading = document.getElementById("heading1");
console.dir(heading);
console.log(heading);

// 2.Selecting with class
// document.getElementsByClassName("myClass")
let headings = document.getElementsByClassName("heading");
console.dir(headings);
console.log(headings);

// 3.Selecting with tag
//document.getElementBy
let paragraph = document.getElementsByTagName("p");
console.dir(paragraph);
console.log(paragraph);

//4.Query Selector
// document.querySelector("myId/myClass/tag")
//returns First element
let Elements = document.querySelector("button"); //1st element
console.log(Elements);

//document.querySelectorAll("myId/myClass/tag")
//returns a NodeList

let AllElements = document.querySelectorAll("p"); //all elements
console.log(AllElements);

// PROPERTIES
// 1.tagName:returns tag for element nodes.
// 2.innerText:returns the text content of the element and all its children
// 3.innerHTML:returns the plain text or HTML contents in the element
// 4.textContent:returns textual content even for hiddem elements

console.log(document.body.firstChild);

let div = document.querySelector("div");
console.log(div);

// Q.s 1.Create a H2 heading element with text - "Hello JavaScript".Append"It is a client-side scripting language"to this text in JS.
let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + "From Developers"; //concat

//Q.s 2.Create 3 divs with common class name - "box".Access them & add some unique text to each of them.
let divs = document.querySelectorAll(".box");
let idx;
for (div of divs) {
  div.innerText = `new unique value ${idx}`;
  idx++;
}
