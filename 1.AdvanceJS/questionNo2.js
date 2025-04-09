/*
Problem 2

Create a Map to store contact information (name, age, email, location) and implement a function to retrieve
contact details by name.
*/

let contactMap = new Map();
contactMap.set("Rahul",{
    age : 22,
    email : "rahul@gmail.com",
    location: "kolkata"
});
contactMap.set("Tania", {
    age: 21,
    email: "tania@gmail.com",
    location: "UP"
});
contactMap.set("Rina", {
    age: 42,
    email: "rina@gmail.com",
    location: "Bardhaman"
});

function getContactByName(name){
    if (contactMap.has(name)){
        let contact = contactMap.get(name);
        console.log(`contact details for name : ${name}`);
        console.log(`Age details is : ${contact.age}`);
        console.log(`Email details is : ${contact.email}`);
        console.log(`location is : ${contact.location}`);
    }
    else{
        console.log("This name is not found in that map function")
    }
}

getContactByName("Rahul");
getContactByName("Utsha");