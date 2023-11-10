function createGrid (rows, cols) {
    const container = document.getElementById('gridContainer')

    for (let i = 0; i < rows * cols; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        container.appendChild(gridSquare);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    createGrid(16, 16);
});