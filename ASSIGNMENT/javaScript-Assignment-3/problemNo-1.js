//Q1. What are conditional statements? Explain conditional statements with syntax and examples.

//solution

/*Conditional statements are fundamental constructs in programming that allow the execution of different code blocks based on certain conditions.
 They enable programs to make decisions, executing different branches of code depending on whether certain conditions are true or false.

The most common types of conditional statements are:

if statements: These execute a block of code if a specified condition is true.

if-else statements: These execute one block of code if a specified condition is true and another block if the condition is false.

if-elif-else statements: These allow for multiple conditions to be checked sequentially. If the condition in an if statement is false, 
the program moves to the next elif (else if) block. If none of the conditions are true, the else block is executed.*/

//Syntax:- and //Example:-

/*if(condition){
    # code block to execute if condition is true
}*/


//Example:-

let x = 10;
if (x > 5) {
    console.log("x is greater than 5");
}

//syntax:- if and else 
/*if (condition) {
    // code block to execute if condition is true
} else {
    // code block to execute if condition is false
}*/
//Example:-
let age = 18;
if(age >= 18){
    console.log("you are eligible for vote ")
}else{
    console.log("you are nit eligible for vote")
}

//Syntax :- if , else if and else :
/*if (condition1) {
    // code block to execute if condition1 is true
} else if (condition2) {
    // code block to execute if condition1 is false and condition2 is true
} else {
    // code block to execute if both condition1 and condition2 are false
}*/
//Example:-
let y = 0;
if (y > 0) {
    console.log("y is positive");
} else if (y < 0) {
    console.log("y is negative");
} else {
    console.log("y is zero");
}

