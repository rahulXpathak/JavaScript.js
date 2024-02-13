const firstName = "Rahul "
const lastName = "pathak"
console.log(firstName + " "+ lastName);
console.log(`my first name is : ${firstName} and my last nameis : ${lastName}`);


const userName = new String('Rahuldotcom')
console.log(userName[0]);
console.log(userName.length);
console.log(userName.charAt(5));
console.log(userName.substring(0,5));


let email = "  Rahul@Rc . com " 
console.log(email.trimStart());

let myWebsite = "Rahul@r.live"
console.log(myWebsite.replace('r','pathak'));
console.log(myWebsite.includes("Rahul"));
console.log(myWebsite.toUpperCase());
console.log(myWebsite.toLowerCase());


const num = new Number(5.1234)
console.log(num.toString());
console.log(num.toFixed(2))

const subscribers = 100000
console.log(subscribers.toLocaleString());
console.log(Number.MAX_VALUE)

console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)+1);
