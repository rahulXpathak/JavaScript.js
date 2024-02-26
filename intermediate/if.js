let temperature = 16 
if(temperature < 20){
    console.log("it's really cold ")
}
else{
    console.log("it's really hot")
}

const score = 99
console.log("welcome to the pw game ");
if(score >= 99){
    console.log("yoy gained a life up");

}
else{
    console.log("you don't get a life ");
}

console.log(`your score is ${score}`);




//login System 
const gmail = "rahulpathak@rp.in"

// if email is present , ask for password , otherwis ask for email 
if(gmail){
    console.log("enter your password ")

}else{
    console.log('Please enter your gmail again :')
}
/*if(gmail != ""){
    console.log("Please provide a password")

}else{
    console.log("Please enter your Gamil Again");
}/** */
console.log(Boolean(gmail))



// if user provides email , password , then allow login , els eask for it

const email = ""
const password = ""
if(email){
    if(password){
        console.log("well to the app");
    }
}else{
    console.log("please enter your email");
}

//logical operation 
// && -> and ; || => OR 

if(email && password){
    console.log("wellcome to pw app")
}else{
    console.log("please enter your email and password");
}





// allow user to singin with google and github 
const googleLoginToken = "" 
const githubloginToken = ""
if(googleLoginToken || githubloginToken){
    console.log("wellcome to the app")
}else{
    console.log("please login to view your account ")
}