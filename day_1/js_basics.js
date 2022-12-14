// variables

var name = "langesh";

{
  let name = "langesh";

  const age = 20;
}

let arr = [1, 2, 3, "langesh", false];

arr[0];

// objects

const obj = {
  name: "langesh",
  age: 20,
  key: "value",
};

console.log(obj["age"]);

// traditional functions

function fun() {
  console.log("Hello world");
}

fun();

// anonymous functions

const fun1 = function () {
  console.log("hi");
};

fun1();

// arrow functions

const arrow = () => {
  console.log("arrow function");
};

arrow();

function printName(name, age) {
  console.log(`My name is ${name}`);
}

printName("langesh", 10);

// conditional statements

a = 1;

if (a == 0) {
  console.log("a is zero");
} else {
  console.log("a is not equal to zero");
}

// callbacks

function c() {
  console.log("function c");
}

function b(fun) {
  console.log("function b");

  // processing ..
  c();
}

b(c);
