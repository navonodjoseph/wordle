function drawBox (container, row, col, letter =" "){
    const box = document.createElement('div'); 
    box.className = "box"; 
    box.id = `box${row}${col}`; 
    box.textContent = letter; 

    container.appendChild(box); 
    return box; 
}
function drawGrid (container){
    const grid = document.createElement('div'); 
    grid.className = 'grid'; 

    for(let i = 0; i < 6 ; i++){
        for(let j= 0; j < 5; j++){
            drawBox(grid, i, j); 
        }
    }
    container.appendChild(grid); 
}

function startUp (){
    const game = document.getElementById('game'); 
    drawGrid(game); 
}
startUp()
