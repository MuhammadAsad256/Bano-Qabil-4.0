
const num = +prompt("Enter a number: ");
if (num % 2 === 0) {
  console.log("Even ");
} else {
  console.log( "Odd");
}

const num = +prompt("Enter a number: ");
if (num >= 0) {
  console.log("Number is positive");
} else {
  console.log("Number is negative");
} 

const score = +prompt("Enter your score: ");
if (score > 90) {
  console.log("Excellent");
} else if (score >= 75) {
  console.log("Very Good");
} else if (score >= 50) {
  console.log("Average");
} else {
  console.log("Poor");
}

const age = +prompt("Enter your age: ");
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}


Const Check = +prompt("Enter a number: ");
if (Check % 5 === 0) {
  console.log("Number is divisible by 5");
} else {
  console.log("Number is not divisible by 5");
}

const character = prompt("Enter any alphabet );

if (character === 'a') {
    console.log(" this character is a vowel");
} else if (character === 'e') {
    console.log(" this character is a vowel");
} else if (character === 'i') {
    console.log(" this character is a vowel");
} else if (character === 'o') {
    console.log(" this character is a vowel");
} else if (character === 'u') {
    console.log(" this character is a vowel");
} else {
    console.log("This character  is a consonant");
}

const num1 = +prompt("Enter first number: ");
const num2 = +prompt("Enter second number: ");
if (num1 > num2) {
  console.log("First number is greater");
} else if (num2 > num1) {
  console.log("Second number is greater");
}

const age = +prompt("Enter your age: ");
if (age >= 45) {
  console.log("You can get a discount");
} else {
  console.log("You can't get a discount");
}


const day = prompt("Enter a day: ");
if (day === "saturday" || day === "sunday") {
  console.log("It is a weekend");
} else {
  console.log("It is a weekday");
}
