// Using  variables to save the reference id that can be used in javascript to manupluate the data.
const redButton = document.getElementById("redBtn");
const yellowButton = document.getElementById("yellowBtn");
const greenButton = document.getElementById("greenBtn");

// Created click event so that when the user click red button to change color of all buttons into red color
redButton.addEventListener("click", () => {
  redButton.style.backgroundColor = "red";
  yellowButton.style.backgroundColor = "red";
  greenButton.style.backgroundColor = "red";
});
// Created click event so that when the user click red button to change color of all buttons into yellow color
yellowButton.addEventListener("click", () => {
  redButton.style.backgroundColor = "yellow";
  yellowButton.style.backgroundColor = "yellow";
  greenButton.style.backgroundColor = "yellow";
});
// Created click event so that when the user click red button to change color of all buttons into green color
greenButton.addEventListener("click",  () => {
  redButton.style.backgroundColor = "green";
  yellowButton.style.backgroundColor = "green";
  greenButton.style.backgroundColor = "green";
});
