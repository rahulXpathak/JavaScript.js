/*
Problem 5

Create two objects person1 and person2 with properties name and age. Create a function “introduce” that
prints "Hello, I'm [name], and I'm [age] years old." Use the call method to make person2 introduce itself
using the introduce function.
*/

// Step 1: Create two person objects
let person1 = {
    name: "Rahul",
    age: 22
  };
  
  let person2 = {
    name: "Anjali",
    age: 25
  };
  
  // Step 2: Create a standalone function
  function introduce() {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);
  }
  
  // Step 3: Use call() to make person1 and person2 introduce themselves
  introduce.call(person1);  // Output: Hello, I'm Rahul, and I'm 22 years old.
  introduce.call(person2);  // Output: Hello, I'm Anjali, and I'm 25 years old.
  