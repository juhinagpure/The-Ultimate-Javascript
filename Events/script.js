// Events in js
// The change in the state of an object is known as an event
// Events are fired to notify code of "intresting changes" that may affect ode execution.

// 1.Mouse events(click,double click,etc)
// 2.Keyboard events(keypress,keyup,keydown)
// 3.form events(submit etc.)
// 4.print event & many more

// EVENT HANDLING IN JS
Node.event = () => {
  //handle here
};

let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) => {
  console.log("btn1 was clicked");
  let a = 25;
  a++;
  console.log(a); //26
};

let div = document.querySelector("div");
div.onmouseover = (evt) => {
  console.log("you are inside div");
};

//EVENT OBJECT
// It is a special object that has details about the event.
// All event handlers have access to the event object's properties and methods
Node.event = (e) => {
  // handle here
};
// e=event object
// e.target,e.type,e.clientX,e.clientY
let btn = document.querySelector("#btn1");
btn1.onclick = (evt) => {
  console.log("btn1 was clicked");
  let a = 25;
  a++;
  console.log(a); //26
  // event objects are used
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};

let div1 = document.querySelector("div");
div.onmouseover = (evt) => {
  //event objects are used
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);
};

// EVENT LISTENERS
// node.addEventListener(event,callback)
// Callback-It is function and goes in another function as a argument
// node.removeEventListener(event,callback)

// *Note:The callback reference should be same to remove

btn1.addEventListener("click", () => {
  console.log("button1 was clicked - handler1");
});

btn1.addEventListener("click", () => {
  console.log("button1 was clicked - handler2");
});

const handler3 = () => {
  console.log("button1 was clicked - handler3");
};
btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
  console.log("button1 was clicked - handler4");
});

btn1.addEventListener("click", (evt) => {
  console.log("button1 was clicked - handler5");
});

// node.removeEventListener(event,callback)
btn1.removeEventListener("click", handler3);

// Qs.1 create a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again
let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"; //dark
modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currMode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currMode);
});
