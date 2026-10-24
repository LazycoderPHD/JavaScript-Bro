// variable = A container that stores a value.
//                   Behaves as if it were the value it contains.

let fullName = "Phat Dao";
let age = 19;
let price = 9.99;
let gpa = 3.8;
let isStudent = false;

let FirstName = "Dao";
let Food = "Pizza";
let Email = "phatdao@gmail.com";

console.log(fullName);
console.log(`You are ${age} years old`);
console.log(`You scored ${gpa}`);
console.log(`The price is ${price} `);

console.log(typeof FirstName);
console.log(`Your name is ${FirstName}`);
console.log(`You like ${Food}`);
console.log(`Your email is ${email}`);

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;