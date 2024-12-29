//Question-1 Add two Numbers
// You are provided with two numbers A and B. Your task is to add these two numbers.
// Note: You have to complete AddTwoNumbers function. No need to take any input.

// function AddTwoNumbers(A, B) {
//     return A + B;
// }
// let A = 2;
// let B = 5;
// console.log(A + B);

//Question-2 Find if the conditions are obeyed or not? 
//Find if the conditions are obeyed or not? You are given two number first as A and second as Band check if both conditions (A<10 and A>B) are satisfied or not with the help of operators.

//Solution:-
// let A = 5;
// let B = 3;
// console.log(A<10 && A>B);

//Question-3 Find the Conditions
// You are given two numbers A�and B�. You need to do the following checks:
// 1. if both are divisible by 10 console true.
// 2. if both are not divisible by 10 console false.
// 3. if one of them only is divisible by 10 console true.
// Use operator to do this.
// Note: You have to complete Check function. No need to take any input.

//Solution:-
// function Check(A, B) {
//     if (A % 10 === 0 && B % 10 === 0) {
//         console.log(true);
//     }
//     else if (A % 10 !== 0 && B % 10 !== 0) {
//         console.log(false);
//     }
//     else {
//         console.log(true);
//     }
// }

// let A = 12; 
// let B = 20; 

// Check(A, B); 

// //Question-4 Find the Fist Number
// You are provided a four digit number N only. Your task is to print out the first digit of that 
// number.
// Note: You have to complete First_Digit function. No need to take any input.

//Solution:-
// function First_Digit(N) {
//     let firstDigit = N.toString()[0];
//         console.log(firstDigit);
// }
// let N = 4567; 
// First_Digit(N);

//Quesion-5 Find the Last Number
// You are provided a four digit number N only. Your task is to print out the last digit of that 
// number.
// Note: You have to complete Last_Digit function. No need to take any input.

//Solution:-
// function First_Digit(N) {
//     let firstDigit = Math.floor(N / 1000);
//         console.log(firstDigit);
// }
// let N = 4567; 
// First_Digit(N); 


//Question-6 Find the reminder
// You are provided with two numbers A�and B�where A�as divisor and B�as dividend.Your 
// task is find the remainder.
// Note: You have to complete Find_the_remainder function. No need to take any input.

//Solution:-
// function Last_Digit(N) {
//     let lastDigit = N % 10;
//         console.log(lastDigit);
// }
// let N = 4567;
// Last_Digit(N);  
// //Question-7 Multiply two Numbers
// You are provided with two numbers A�and B�. Your task is to multiply these two numbers.
// Note: You have to complete Multiply_two_number function. No need to take any input.

//Solution:-
// function Find_the_remainder(A, B) {
//     let remainder = B % A;
//         console.log(remainder);
// }
// let A = 2; 
// let B = 5; 
// Find_the_remainder(A, B);  

// //Questions-8 Marks Calculator
// Shyam has got his marks in three subjects as A�, B�, and C�(out of 100).Write a program to 
// calculate his total marks and his average.
// Note: You have to complete Sum and Average functions. No need to take any input.

//Solution:-
// let A = 50;
// let B = 20;
// let C = 100;
// let sum = (A+B+C);
// let Average = (A+B+C)/3;
// console.log(sum, Average);
