// ///////////////////     VERY EASY    ////////////////////////////////
const num1 = 15;
const num2 = 10;

console.log(`The difference between ${num1} and ${num2} is ${num1 - num2}`);

// /////////////////       EASY     //////////////////////
const name1 = "James";
const name2 = "Rob";

console.log(
  `The name ${name1} is longer than ${name2} by ${
    name1.length - name2.length
  } characters`
);

// ////////////////////////       MEDIUM      ////////////////////////////
let input1 = prompt("Are you shouting or whispering?");

if (input1 === input1.toUpperCase()) {
  console.log("The user is yelling");
} else if (input1 === input1.toLowerCase()) {
  console.log("The user is whispering");
} else {
  console.log("The user is talking normally");
}

// ////////////////////////////         Hard       /////////////////////
function add(a, b, result) {
  result = a + b;
  return result;
}

function subtract(a, b, result) {
  result = a - b;
  return result;
}

function multiply(a, b, result) {
  result = a * b;
  return result;
}

function divide(a, b, result) {
  result = a / b;
  return result;
}

console.log(add(3, 4));

// ////////////////////////////    VERY HARD   ////////////////////////
let mathQuestion = prompt("Enter operator ( either +, -, * or / ): ");

const number1 = parseFloat(prompt("Enter first number: "));
const number2 = parseFloat(prompt("Enter second number: "));

let result1;

if (mathQuestion == "+") {
  result1 = add(number1, number2);
} else if (mathQuestion == "-") {
  result1 = subtract(number1, number2);
} else if (mathQuestion == "*") {
  result1 = multiply(number1, number2);
} else {
  result1 = divide(number1, number2);
}

console.log(result1);
