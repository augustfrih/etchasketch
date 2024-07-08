let body = document.querySelector("body");

let grid = document.querySelector(".grid");

function createGrid(x, y) {
    for (let i = 0; i < x; i++) {
        let row = document.createElement("div");
        row.setAttribute("class","row");

        for (let j = 0; j < y; j++) {
            let square = document.createElement("div");
            square.setAttribute("class","square");
            row.appendChild(square);
        }
        
        
        grid.appendChild(row);
        
    }
    return;
}

createGrid(4, 4);

let squares = document.querySelectorAll(".square");

squares.forEach ((square) => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "red";
    });
})

let button = document.querySelector("button");

button.addEventListener("click", () => {
    let x = prompt("gridsize: ");
    if (x > 100) {
        alert("too big");
        return;
    }

    let rows = document.querySelectorAll(".row");
    rows.forEach ((row) => {
        row.remove();
    })
    createGrid(x, x);

    let squares = document.querySelectorAll(".square");

    squares.forEach ((square) => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "red";
        });
    })
})
