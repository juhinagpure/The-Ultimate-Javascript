// Classes & Object

// Prototypes in JS
//  A javaScript object is an entity having state and behavior (properties and method).
//  JS objects have a special property called prototype.
//  We can set prototype using _ _ proto _ _

//  NOte-If object & prototype have same method,object’s method will be used.

// Classes in JS
//  Class is a program-code template for creating objects.
//  Those objects will have some state (variables) & some behaviour (functions) inside it.
class MyClass {
  constructor() {}
  myMethod() {}
}
let myObj = new MyClass();

// Constructor( ) method is :
// automatically invoked by new
//  initializes object

class ToyotoCar {
  constructor(brand, mileage) {
    console.log("creating new object");
    this.brand = brand;
    this.mileage = mileage;
  }
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
}
let fortuner = new ToyotoCar("fortuner", 10); //constructor
console.log(fortuner);
let lexus = new ToyotoCar("lexus", 12); //constructor
console.log(lexus);

// // Inheritance in JS
// Inheritance is passing down properties & methods from parent class to child class

// class Parent {}
// class Child extends Parent {}

// Note- If Child & Parent have same method, child’s method will be used.[Method Overriding]

class Parent {
  hello() {
    console.log("hello");
  }
}
class Child extends Parent {}

let obj = new Child();

class Person {
  constructor(name) {
    // console.log("enter parent constructor");
    this.species = "homo sapiens";
    this.name = name;
  }
  eat() {
    console.log("eat");
  }

  sleep() {
    console.log("sleep");
  }
  work() {
    console.log("do nothing");
  }
}

class Engineer extends Person {
  constructor(name) {
    // console.log("enter child constructor");
    super(name); // to invoke parent class constructor
    // this.branch = branch;
    // console.log("exit child constructor");
  }
  work() {
    console.log("solve poblems,build something");
  }
}
// let juhiObj = new Engineer();
let engObj = new Engineer("juhi");

// super Keyword
//  The super keyword is used to call the constructor of its parent class to access the parent's
//  properties and methods.

// super(args); // calls Parent‘s constructor
// super.parentMethod(args);

// Let‘s Practice
// Qs. You are creating a website for your college. Create a class User with 2 properties, name & email. It also has a method called viewData( ) that allows user to view website data.

let DATA = "secret information";

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("data=", DATA);
  }
}
let student1 = new User("juhi", "abc@gmail.com");
let student2 = new User("bulbul", "ijk@gmail.com");
