const container = document.getElementById("container");
const resizeBtn = document.getElementById("resize-btn");

const DEFAULT_SIZE = 16;
const MAX_SIZE = 100;

// Builds a size x size grid inside the container
function createGrid(size) {
  // Remove the existing grid
  container.innerHTML = "";

  // Each square takes up 1/size of the container's width and height
  const squareSize = `${100 / size}%`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = squareSize;
    square.style.height = squareSize;

    // Color the square when the mouse enters it.
    // It stays colored, which leaves a trail.
    square.addEventListener("mouseenter", () => {
      square.classList.add("hovered");
    });

    container.appendChild(square);
  }
}

// Ask the user for a new grid size
resizeBtn.addEventListener("click", () => {
  const input = prompt(`How many squares per side? (1 to ${MAX_SIZE})`);

  // The user pressed Cancel
  if (input === null) return;

  const size = Number(input);

  if (!Number.isInteger(size) || size < 1 || size > MAX_SIZE) {
    alert(`Please enter a whole number from 1 to ${MAX_SIZE}.`);
    return;
  }

  createGrid(size);
});

// Create the starting grid when the page loads
createGrid(DEFAULT_SIZE);