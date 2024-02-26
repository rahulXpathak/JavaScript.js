/*Q3. What are loops, and what do we need them? Explain different types of loops with their syntax and
examples.

Loops are programming constructs that allow a set of instructions to be executed repeatedly based on a specific condition or for a certain number of times. 
They are fundamental in automating repetitive tasks, iterating over data structures like arrays, and controlling the flow of a program.


**The primary reasons we need loops in programming are:

*Automation of Repetitive Tasks: 
Loops enable the execution of a block of code multiple times without the need to manually write the same code over and over again. This saves time, effort, 
and reduces the chances of errors.

*Iteration Over Data Structures: 
Loops are essential for iterating over arrays, objects, lists, or any collection of data elements. They allow us to process each element of the data structure one by one,
performing operations or computations as needed.

*Dynamic Control Flow: 
Loops provide a way to dynamically control the flow of a program. By using conditions within loops, we can decide when to start, continue, or exit the loop based on 
certain criteria, making the program more flexible and adaptable to different scenarios.

*Efficient Resource Utilization: 
Loops help optimize resource utilization by allowing us to perform tasks with minimal code. Instead of writing separate instructions for each iteration,
we can encapsulate the repetitive logic within a loop, leading to cleaner and more concise code.

Overall, loops are essential tools in programming that enable efficient automation, data processing, and control flow management, 
making them indispensable in a wide range of applications and scenarios.
*/

//In JavaScript, there are primarily three types of loops:

//1.FOR LOOP  :- Executes a block of code a specified number of times.

//Syntax :- 
/*for (initialization; condition; iteration) {
    // code block to be executed
}
*/

//Example:- 

for(let i = 0; i <= 5 ; i++){
    console.log(`In this for loop; The Number is : ${i}`)
}

//2.WHILE  LOOP :-  Executes a block of code while a specified condition is true.
/*Syntax:- 

while (condition) {
    // code block to be executed
    // iteration statement (to prevent infinite loop)
}
*/

//Example:- 

let i = 0;
while(i <= 5){
    console.log(`In this while loop ; Number is : ${i}`);
    i++
}

/*
DO WHILE LOOP:- Similar to a while loop, but the code block is executed at least once before the condition is tested.

*Syntax:- 

do {
    // code block to be executed
    // iteration statement (to prevent infinite loop)
} while (condition);
*/

//Example:- 
let j = 0;
do{
    console.log(`In this Do While loop; Number is  ${j}`);
    j++;
}while(j <= 5);


