// 1. step one. select the h1 by id 
const firstName = document.querySelector("#firstName");
const errorContainerMessage = document.querySelector(".error__message");
const errorContainerSVG = document.querySelector(".error__container")

// 2. add event to the input wich will be keyup 
firstName.addEventListener("keyup", logLengthMsg)



// 3. i want to get the length of the input
function logLengthMsg (event) {
    console.log("here")
    //get the value of the input
    const inputValue = event.target.value.trim();
    console.log("input value: ", inputValue);
    const valueLength = inputValue.length;
    console.log("input length: ", valueLength);
    if(valueLength > 0) {
        console.log("input has a value");
        errorContainerMessage.innerHTML = "the input has a value";
        errorContainerSVG.style.display = "block";

        
    }else{
        console.log("input does not have a value");
        errorContainerMessage.innerHTML = "the input has not value";
        errorContainerSVG.style.display = "block";
    }
    
}




// 4. make a condition

//if the length is > 0
    //show a messgae "input has a value"
//else
    //show a message "the input dosent have a value"