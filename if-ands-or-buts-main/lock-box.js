const prompt = require('prompt-sync')({sigint: true});

let pincode = "1234"; 

let security = prompt("Enter the pincode: "); // could change "prompt" for "Number"
// if you change number for prompt then make sure the pincode is a number and not a string
// number("Enter the pincode: ") = pincode = 1234;
// prompt("Enter the pincode: ") = pincode = "1234";

if(security !== pincode){
    console.log("failure");
}
if(security === pincode){
    console.log("success");
}

