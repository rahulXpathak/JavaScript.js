/*
Create a Map in JavaScript and perform the following operations: 
1. Add key-value pairs to the Map.
2. Check if a specific key exists.
3. Retrieve the value associated with a given key.
4. Iterate through all key-value pairs.
*/

let mymap = new Map();
mymap.set("Name", "Rahul")
mymap.set("age", 23);
mymap.set("city", "kolkata");

//Add key-value pairs to the Map.
console.log("After adding key and value pairs");
console.log(mymap);

// Check if specific keys exist
console.log("Does name exits in map function :", mymap.has("Name"));
console.log("Does country exits in map function :", mymap.has("Country"))

//Retrieve the value associated with a given key.
let nameValue = mymap.get("Name");
let ageValue = mymap.get("age");
console.log("Value for key 'name' : ", nameValue);
console.log("value for key 'age' : ", ageValue);


//Iterate through all key-value pairs.
mymap.forEach((value, keys) =>{
    console.log(`${value} => ${keys}`);
});
