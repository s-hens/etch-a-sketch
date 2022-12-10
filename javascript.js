const gridContainer = document.querySelector("#gridContainer");

for (let i = 0; i < 256; i++) {
    const artGrid = document.createElement("div");
    artGrid.setAttribute("class", "grid");
    gridContainer.appendChild(artGrid);
}