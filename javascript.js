const gridContainer = document.querySelector("#gridContainer");

const cellSlider = document.getElementById("cellSlider");

const sliderOutput = document.getElementById("sliderOutput");
sliderOutput.textContent = `${cellSlider.value} x ${cellSlider.value}`;

function gridSize () {
    //ask for grid width
    let widthOfGrid = cellSlider.value;
    //apply grid width info to css
    timesToPrintAuto = Array(Number(widthOfGrid) + 1).join("auto ");
    gridContainer.setAttribute("style", `grid-template-columns: ${timesToPrintAuto};`);
    //generate appropriate number of cells
    areaOfGrid = widthOfGrid ** 2;
    for (let i = 0; i < areaOfGrid; i++) {
        const gridCell = document.createElement("div");
        gridCell.setAttribute("class", "grid");
        gridContainer.appendChild(gridCell);
    }
}

gridSize ();

//cells fill black on mouseover
gridContainer.addEventListener("mouseover", function (e) {
    e.target.setAttribute("style", `background-color: #000000;`);
  });

//when slider is moved, a new grid is generated accordingly
cellSlider.oninput = function() {
    //delete old grid
    gridContainer.textContent = ``;
    //create new grid
    gridSize ();
    //show output
    sliderOutput.textContent = `${this.value} x ${this.value}`;
}