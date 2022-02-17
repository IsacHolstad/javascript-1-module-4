// i want he circle to turn blue when i click the button
// i want that when i refresh the page the circkle keeps the blue color

// 1. select the cicrle by class .circle

// 2. select the button by is #circleBTN

const cicrle = document.querySelector(".circel");
const cicrleActionBtn = document.querySelector("#circleBTN")

const bgColor = localStorage.getItem("bgColor");
console.log("bgColor: ", bgColor);
cicrle.style.backgroundColor = bgColor;

cicrleActionBtn.addEventListener ("click", function () {
    console.log("hey you clicked the button")
    // i want to change the background color of the cicrle to be blue
    cicrle.style.backgroundColor = "blue"

});

// local storage 
// 1. localstorage 
localStorage.setItem("bgColor","blue");

const name = localStorage.getItem("name")
console.log("the name is: ", name)