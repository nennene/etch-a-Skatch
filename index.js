// this function will make grid

function buildGrid() {

for(i=0; i< 16*16 ;i++) {
let square = document.createElement("square");
square.style.width = "50px";
square.style.height = "50px";
square.style.background = "pink";
square.style.color = "white";
square.style.border ="solid, black"
document.getElementById("container").appendChild(square);
square.addEventListener("mouseover", (event => {
  event.target.style.backgroundColor = "blue";
}));
};
};
// prompt button
const choiceButtonElement = document.getElementById("btn");

choiceButtonElement.addEventListener("click",() => {
    const promptResult = prompt("Choose grid size (max 100)");
    if (promptResult && promptResult > 0 && promptResult <= 100) {
      buildGrid(promptResult);
  } else {
      alert("Please enter a valid number between 1 and 100.");
  }
})




buildGrid();


