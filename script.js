const container = document.getElementById('container');
const changeSizeBtn = document.getElementById('changeSizeBtn');
const colorPicker = document.getElementById('colorPicker');
const selectedColorDiv = document.getElementById('selectedColor');
const toggleColorBtn = document.getElementById('toggleColorBtn'); // New button
const deleteColorBtn = document.getElementById('deleteColorBtn')

let currentColor = colorPicker.value;
let isColorEnabled = true; // Flag to enable/disable color change

function createGrid(size) {
    container.innerHTML = '';
    container.style.gridTemplateColumns = `repeat(${size}, 20px)`;
    container.style.gridTemplateRows = `repeat(${size}, 20px)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        container.appendChild(square);
    }

    addHoverEffect();
}

function addHoverEffect() {
    const squares = document.querySelectorAll('.grid-square');

    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            if (isColorEnabled) {
                square.style.backgroundColor = currentColor;
            }
        });
    });
}

function changeGridSize() {
    const newSize = prompt('Enter the number of squares per side:');
    const parsedSize = parseInt(newSize, 10);

    if (!isNaN(parsedSize) && parsedSize > 0) {
        createGrid(parsedSize);
    }
}

function updateSelectedColor() {
    currentColor = colorPicker.value;
    selectedColorDiv.style.backgroundColor = currentColor;
}

function toggleColor() {
    isColorEnabled = !isColorEnabled;
}

function deleteColor () {
    const deleteColor = deleteColorBtn 
    
}

// Initial grid creation
createGrid(16);

// Assigning the click event to the "Change Grid Size" button
changeSizeBtn.addEventListener('click', changeGridSize);

// Assigning the input event to the color picker
colorPicker.addEventListener('input', updateSelectedColor);

// Assigning the click event to the "Toggle Color" button
toggleColorBtn.addEventListener('click', toggleColor);
