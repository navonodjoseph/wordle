# wordle
A version of the popular word game using javascript, html, and css 

## background
This project is part of my immersive software engineering coursework at General Assembly. It allowed me to implement key concepts like DOM, eventListeners, and JavaScript for the first time in a big project and try to stretch my capabilities (it certainly did that). 

## first steps (bronze plan)  
I first went about trying to make the simplist version possible by constructing a 5x6 grid using DOM concepts we learned in class. During this phase, I borrowed some fraemwork from some online solutions, including this video. To begin I wrote the function `drawBox` which included four parameters: `container`, `row`, `col`, `letter`. The plan was to have this box be the 60px by 60px that contained individual letters. The function `drawGrid` uses a nested for loop to create the rows and colums. 

```
function drawGrid (container) {
    const grid = document.createElement('div'); 
    grid.className = 'grid';

    for(let i = 0; i < 6 ; i++)
        for (let j = 0; j < 5; j ++){
            drawBox(grid, i, j)
        }
    container.appendChild(grid); 
}
```
The end result of this phase was having a grid that resembled the Wordle grid. 
## next steps (silver plan)

## what's next (improvements) 
