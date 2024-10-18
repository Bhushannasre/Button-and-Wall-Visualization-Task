const redButton=document.getElementById("redBtn");
const yellowButton=document.getElementById("yellowBtn");
const greenButton=document.getElementById("greenBtn");
const rotationButton=document.getElementById("rotationBtn");
// countClick  Variable keep track of how many time user has clicked the rotation button and each time value will be updated on click
let countClick=0;

// click event will accured when user hit the rotation button so that function inside will be executed
rotationButton.addEventListener("click", () =>{
//Countclick will update +1 when the rotation button is clicked and event is executed
    countClick++;
// When rotation button is clicked more than 3 times than the count will be reset to 1 and it will rotate in a loop
if(countClick>3){
    countClick=1;
}
// When rotation button clicked 1st time Condition will be checked and then color and innertext will be updated to green, red, yellow
// style.backgroundcolor will forcefully change the color and innertext is used to change the text
if(countClick===1){
    redButton.style.backgroundColor="green";
    redButton.innerText="Green";
    yellowButton.style.backgroundColor="red";
    yellowButton.innerText="Red";
    greenButton.style.backgroundColor="yellow";
    greenButton.innerText="Yellow";
    // console.log("click completed");
}
// when rotation button clicked 2nd time then color and text will be update to yellow, green, red
else if(countClick===2){
    redButton.style.backgroundColor="yellow";
    redButton.innerText="Yellow";
    yellowButton.style.backgroundColor="green";
    yellowButton.innerText="Green";
    greenButton.style.backgroundColor="red";
    greenButton.innerText="Red";
// console.log("click completed");
}
// Here color and text will be change to the orignal state color red, yellow, green
else{
    redButton.style.backgroundColor="red";
    redButton.innerText="Red";
    yellowButton.style.backgroundColor="yellow";
    yellowButton.innerText="Yellow";
    greenButton.style.backgroundColor="green";
    greenButton.innerText="Green";
// console.log("click completed");
}
// }

});



