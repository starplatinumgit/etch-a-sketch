
const variableName = "";
const sketchContainer = document.querySelector('.sketch-container'); 
const newGridBtn = document.querySelector('#new-grid-btn');
const resetGridBtn = document.querySelector("#reset-grid-btn");

function createRows(height) {
    for (let i = 0; i < height; i++) {
        let div = document.createElement("div");
        div.classList.add("row");
        sketchContainer.appendChild(div);
    }
    const rows = document.querySelectorAll('.row');
    return rows;
}

function createSquares(width, rowsQuery) {
    rowsQuery.forEach((row) => {
        for (let i = 0; i < width; i++) {
            let div = document.createElement("div");
            randomRGB(div);
            div.classList.add('square');
            row.appendChild(div);
        }
        const squares = document.querySelectorAll('.square');
        return squares;
    })
}

function createGrid(height, width) {
    createSquares(width, createRows(height));
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.opacity = `${parseFloat((square.style.opacity) || 0) + 0.1}`;
        })
    })
    let currentGrid = sketchContainer.querySelectorAll('div');
    return currentGrid;
}

function deleteGrid(currentGrid) {
    console.log(currentGrid);
    currentGrid.forEach((div) => {
        div.remove();
    })
}

let currentGrid = createGrid(16, 16);
let gridSize = 16;

newGridBtn.addEventListener("click", () => {
    let num = prompt("Enter your size - 100 max: ");
    if (num > 0 && num <= 100) {
        gridSize = num;
        deleteGrid(currentGrid);
        currentGrid = createGrid(num, num);
    }
    else {
        alert("Your entry was invalid. Please try again.")
    }
})

resetGridBtn.addEventListener("click", () => {
    deleteGrid(currentGrid);
    currentGrid = createGrid(gridSize, gridSize);
})

function randomRGB(square) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    square.style.backgroundColor = (`rgb(${r} ${g} ${b})`);
}

