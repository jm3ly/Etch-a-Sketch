const container = document.getElementById('container');
const changeSizeBtn = document.getElementById('changeSizeBtn');

function createGrid(size) {
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${size}, 20px)`;
  container.style.gridTemplateRows = `repeat(${size}, 20px)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square'); // Adding the class here
    container.appendChild(square);
  }

  addHoverEffect();
}

function addHoverEffect() {
  const squares = document.querySelectorAll('.grid-square');

  squares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'blue';
    });
  });
}

function changeGridSize() {
  const newSize = prompt('Enter the number of squares per side:');
  const parsedSize = parseInt(newSize, 10);

  if (!isNaN(parsedSize) && parsedSize > 0) {
    createGrid(parsedSize);
  };
};

// Initial grid creation
createGrid(16);

// Assigning the click event to the button
changeSizeBtn.addEventListener('click', changeGridSize);
