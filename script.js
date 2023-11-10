function createGrid (rows, cols) {
    const container = document.getElementById('gridContainer')
    const colorPalette = document.getElementById('color')

    if (container && colorPalette) {
        const basicColors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'black', 'white', 'grey']
    };

    basicColors.forEach(color => {
        const colorOption = document.createElement('div');
        colorOption.classList.add(color-option);
        colorOption.style.backgroundColor = color;
    });

    colorOption.addEventListener('click', function () {
        selectedColor = color
    })

    colorPalette.appendChild(colorOption);

    for (let i = 0; i < rows * cols; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('gridSquare');
        container.appendChild(gridSquare);
        gridSquare.addEventListener('mouseover', function() {
            gridSquare.style.backgroundColor = 'red';
        });
        /*gridSquare.addEventListener('mouseout', function() {
            gridSquare.style.backgroundColor = '';
        });*/
    };
};

document.addEventListener("DOMContentLoaded", function () {
    createGrid(16, 16);
});

function getColor() {

}

/*function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};*/