//Reference to container for the grid
const container = document.getElementById("main-grid");

//Creates the grid for the sketching area
function makeRows(rows, cols){
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for(c = 0; c < (rows * cols); c++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

//Reference to the size slider and the display for the current grid size
const sizeSlider = document.getElementById("grid-slider");
let displayGridSlider = document.getElementById("display-grid-size");

//Sets the default grid when page opened
setDefaultGrid();

//Changes the grid size
function changeGridSize() {
    let value = sizeSlider.value;
    container.innerHTML = "";
    makeRows(value, value);
    displayGridSlider.innerHTML = value.toString() + "x" + value.toString();
}

//Set default grid
function setDefaultGrid() {
    let value = 16;
    container.innerHTML = "";
    makeRows(value, value);
    displayGridSlider.innerHTML = value.toString() + "x" + value.toString();   
}
