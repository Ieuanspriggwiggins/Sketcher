//Reference to container for the grid
const container = document.getElementById("main-grid");

let value = 16

//Creates the grid for the sketching area
function makeRows(rows, cols){
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for(c = 0; c < (rows * cols); c++){
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", changeColour);
        container.appendChild(cell).className = "grid-item";
    };
};

//Reference to the size slider and the display for the current grid size
const sizeSlider = document.getElementById("grid-slider");
let displayGridSlider = document.getElementById("display-grid-size");

//Sets the default grid when page opened
setDefaultGrid();
document.getElementById("main-grid").classList.toggle("main-grid-toggle");

//Changes the grid size
function changeGridSize() {
    value = sizeSlider.value;
    container.innerHTML = "";
    makeRows(value, value);
    displayGridSlider.innerHTML = value.toString() + "x" + value.toString();
}

//Set default grid
function setDefaultGrid() {
    container.innerHTML = "";
    makeRows(value, value);
    displayGridSlider.innerHTML = value.toString() + "x" + value.toString();   
}

//Current colouring colour
let currentColour = "#1E2019";

//Reference to grid controls
normalColourBtn = document.getElementById("default-color-btn");
rainbowModeBtn = document.getElementById("rainbow-mode-btn");
clearBtn = document.getElementById("clear-btn");
removeGridBtn = document.getElementById("remove-grid-btn");

//Event listeners for buttons
normalColourBtn.addEventListener("click", function() {
    currentColur = "#1E2019"
});
clearBtn.addEventListener("click", function() {
    changeGridSize();
})
removeGridBtn.addEventListener("click", function() {
    document.getElementById("main-grid").classList.toggle("main-grid-toggle");
})

function changeColour(e) {
    e.target.style.backgroundColor = currentColour;
}