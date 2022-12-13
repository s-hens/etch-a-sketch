const gridContainer = document.querySelector("#gridContainer");

const cellSlider = document.getElementById("cellSlider");

const redBox = document.getElementById("redBox");

function gridSize () {
    //ask for grid width
    let widthOfGrid = cellSlider.value;
    //apply grid width info to css
    timesToPrintAuto = Array(Number(widthOfGrid) + 1).join("auto ");
    gridContainer.setAttribute("style", `grid-template-columns: ${timesToPrintAuto};`);
    //generate grid height
    let heightOfGrid = widthOfGrid * 0.6;
    //generate appropriate number of cells, rounding to the nearest widthOfGrid
    areaOfGridInitially = (widthOfGrid * heightOfGrid);
    areaOfGrid = Math.ceil(areaOfGridInitially/widthOfGrid)*widthOfGrid;
    for (let i = 0; i < areaOfGrid; i++) {
        const gridCell = document.createElement("div");
        gridCell.setAttribute("class", "grid");
        gridContainer.appendChild(gridCell);
    }
}

gridSize ();

//cells fill black on mouseover
gridContainer.addEventListener("mouseover", function (e) {
    e.target.setAttribute("style", `background-color: #505050; border: 1px solid #484848;`);
  });

//when slider is moved, a new grid is generated accordingly
cellSlider.oninput = function() {
    //delete old grid
    gridContainer.textContent = ``;
    //create new grid
    gridSize ();
}

const shakeButton = document.querySelector('#shakeButton');

shakeButton.addEventListener("click", shake);

function shake() {
    redBox.classList.remove("shakingRedBox");
    redBox.offsetHeight;
    redBox.classList.add("shakingRedBox");
    gridContainer.textContent = ``;
    gridSize ();
}