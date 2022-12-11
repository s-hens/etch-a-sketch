const gridContainer = document.querySelector("#gridContainer");

function gridSize () {
    let widthOfGrid = prompt (`Declare grid size please`, 0);
    timesToPrintAuto = Array(Number(widthOfGrid) + 1).join("auto ");
    console.log(timesToPrintAuto);
    gridContainer.setAttribute("style", `grid-template-columns: ${timesToPrintAuto};`);
    areaOfGrid = widthOfGrid ** 2;
    for (let i = 0; i < areaOfGrid; i++) {
        const artGrid = document.createElement("div");
        artGrid.setAttribute("class", "grid");
        gridContainer.appendChild(artGrid);
    }
}

gridSize ();