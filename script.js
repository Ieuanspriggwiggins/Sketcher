//Reference to container for the grid
const container = document.getElementById("main-grid");

//Reference for current mode display
const currentModeDisplay = document.getElementById("current-mode-display");
currentModeDisplay.innerHTML = "Current Mode - Normal"

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

//Set default grid
function setDefaultGrid() {
    container.innerHTML = "";
    makeRows(value, value);
    displayGridSlider.innerHTML = value.toString() + "x" + value.toString();   
}

//Changes the grid size
function changeGridSize() {
    value = sizeSlider.value;
    container.innerHTML = "";
    makeRows(value, value);
    displayGridSlider.innerHTML = value.toString() + "x" + value.toString();
}

//Current colouring colour
let currentMode = "color";
let normalColour = "#1E2019";

//Reference to grid controls
normalColourBtn = document.getElementById("default-color-btn");
rainbowModeBtn = document.getElementById("rainbow-mode-btn");
clearBtn = document.getElementById("clear-btn");
removeGridBtn = document.getElementById("remove-grid-btn");
eraserModeBtn = document.getElementById("eraser-mode-btn");

//Event listeners for buttons
normalColourBtn.addEventListener("click", function() {
    currentMode = "color"
    currentModeDisplay.innerHTML = "Current Mode - Normal";
});
clearBtn.addEventListener("click", function() {
    changeGridSize();
})
removeGridBtn.addEventListener("click", function() {
    document.getElementById("main-grid").classList.toggle("main-grid-toggle");
})

rainbowModeBtn.addEventListener("click", function() {
    currentMode = "rainbow";
    currentModeDisplay.innerHTML = "Current Mode - Rainbow";
})
eraserModeBtn.addEventListener("click", function() {
    currentMode = "eraser";
    currentModeDisplay.innerHTML = "Current Mode - Eraser";
})

//Changes colour depending on the mode that's been set by the user
function changeColour(e) {
    if(currentMode == "color"){
        e.target.style.backgroundColor = normalColour;
    }
    else if(currentMode == "rainbow"){
        const randomRed = Math.floor(Math.random() * 256);
        const randomGreen = Math.floor(Math.random() * 256);
        const randomBlue = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
    }
    else if(currentMode == "eraser"){
        e.target.style.backgroundColor = "white"
    }
    
}

