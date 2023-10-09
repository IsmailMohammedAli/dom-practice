/*
// Write a for loop that prints your name 20 times.

for(let i = 0; i < 20; i++) {
    console.log("Ismail")
}

// Write a while that prints your surname 20 times.

// let i = 0;
// while (i < 20) {
//     console.log("Ali");
//     i++;
// }

// write if/else if, chained code to check what day of the day it is.

let today = "tuesday"
if (today == "monday") {
console.log("it is coding day")
 } else if (today == "tuesday"){
    console.log("its my off day")
 }else {
    console.log("ask me personally which day")
 }

 // convert the if/else if to switch
switch (today) {
    case "monday":
        console.log("it is coding day, from switch")
        break;
    case "tuesday":
        console.log("it is my off day, from switch")
        break;

    default:
        console.log("ask me personally which day, from switch")
        break;
}

// convert the while loop to a do ... while loop whose body runs once

let i = 0 ;
do {
    console.log("Ismail");
    i++;
} while (false);








// function multiply(num1, num2) {
//   let result = num1 * num2;
//   return result;
// }

// let sum = multiply (5,6)
// console.log(sum)

// write a simple program that calculates your salar and tax if salary is 500 and tax is 20
//what is the take home salary
*/

let salary = 500;
let tax = 0.2;
let takehomesalary = salary - (salary * tax) ;
console.log("your take home salary is " + takehomesalary)
