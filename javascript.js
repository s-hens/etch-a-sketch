const gridContainer = document.querySelector("#gridContainer");

function gridSize () {
    //ask for grid width
    let widthOfGrid = prompt (`Declare grid size please`, 0);
    //apply grid width info to css
    timesToPrintAuto = Array(Number(widthOfGrid) + 1).join("auto ");
    gridContainer.setAttribute("style", `grid-template-columns: ${timesToPrintAuto};`);
    //generate appropriate number of cells
    areaOfGrid = widthOfGrid ** 2;
    for (let i = 0; i < areaOfGrid; i++) {
        const artGrid = document.createElement("div");
        artGrid.setAttribute("class", "grid");
        gridContainer.appendChild(artGrid);
    }
}

gridSize ();