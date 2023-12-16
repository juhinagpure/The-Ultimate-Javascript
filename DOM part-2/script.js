// // DOM Manipulation

// //Attributes

// // 1.getAttribute(Attr); //to get the attribute value

let divv = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

let parag = document.querySelector("p");
console.log(para.getAttribute("class"));

// 2.setArribute(attr,value)//to set the attribute value

let paragraph = document.querySelector("p");
console.log(paragraph.setAttribute("class", "new"));

let divs = document.querySelector("div");

// 3.style
div.style.backgroundColor = "green";
div.style.fontSize = "26px";

// INSERT ELEMENTS
// 1.Node.append(el) adds at the end of the Node(inside)
// 2.node.prepend(el)adds at the start of node(inside)
// 3.node.before(el) adds before the node(outside)
// 4.node.after(el) adds after the node(outside)

let newBtn = document.createElement("button");
newBtn.innerText = "click me !";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hi,I am new</i>";

document.querySelector("body").prepend(newHeading);

// DELETE ELEMENT
// 1.node.remove() remove the node

let paragr = document.querySelector("p");
para.remove();

// PRACTICE
// Qs1.Create a button element.Give it a text "click me",background color of red and text color of white.
// Insert the button at the first element inside the body tag.
let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);

// //Create a <p> tag in html, give it a class & some styling.
// Now create a new class in CSS and try to append this class to the <p> element.
// Solve this problem using classList.
// Did you notice, how you overwrite the class name when you add a new one
let para = document.querySelector("p");
