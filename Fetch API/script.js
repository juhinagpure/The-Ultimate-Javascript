// fetch API

//  The Fetch API provides an interface for fetching (sending/receiving) resources.
//  It uses Request and Response objects.
//  The fetch() method is used to fetch a resource (data).

//  let promise = fetch( url , [options] )

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

// Understanding Terms

//  AJAX is Asynchronous JS & XML
//  JSON is JavaScript Object Notation
//  json() method : returns a second promise that resolves with the result of parsing the
//  response body text as JSON. (Input is JSON, output is JS object)

const getFacts = async () => {
  console.log("getting data ....");
  let response = await fetch(URL);
  console.log(response); //JSON format
  let data = await response.json();
  console.log(data[0].text);
  factPara.innerText = data[2].text;
};

// Promise Chain
function getFacts() {
  fetch(URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      factPara.innerText = data[1].text;
    });
}

btn.addEventListener("click", getFacts);

// Requests & Response
//  HTTP Verbs
//  Response Status Code
//  *HTTP response headers also contain details about the
//  responses, such as content type, HTTP status code etc.

// Homework Task
// sending POST Request
function placeOrder() {
  const order = { candy: "Lollipops", quantity: 5, child: "Timmy" };

  fetch("https://example.com/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(order),
  })
    .then((response) => response.json())
    .then((data) => alert("Order placed successfully! 🍭"))
    .catch((error) => alert("Oops! Something went wrong. Please try again."));
}
