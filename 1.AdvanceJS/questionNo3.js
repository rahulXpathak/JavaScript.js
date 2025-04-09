/*
Problem 3

You are given an array of numbers named myArray. Create a function that takes any number of arguments
and adds them to the existing array. Use the spread and rest operator.
*/
let myArray = [1,2,3];
function addToarray(...newElement){
    myArray = [...myArray, ...newElement];
    console.log(myArray)
}

addToarray(4,5,6);
addToarray(7,8,9,10,11); 