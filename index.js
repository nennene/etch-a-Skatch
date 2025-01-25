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
    generateGrid(parseInt(promptResult));
})




buildGrid();


