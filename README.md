# wordle
A version of the popular word game using javascript, html, and css 

## background
This project is part of my immersive software engineering coursework at General Assembly. It allowed me to implement key concepts like DOM, eventListeners, and JavaScript for the first time in a big project and try to stretch my capabilities (it certainly did that). 

## getting started (bronze plan)  
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

Note: For the sake of brevity I'm not including all of the code that created this grid, just the key parts. 

## revisiting CSS styling
One of the hardest mental leaps for me was understanding that I could create a DIV in javascript and apply CSS styling. I was used to being able to view all CSS selectors in the HTML file, so it took me some time to figure out how exaclty to make the CSS work with my new elements created in the DOM. I learned to spend a lot of time orienting myself by using Dev tools and checking for my new elements there. 

## next steps (silver plan)
I was happy to get a grid made that closely resembled the original Wordle game. I still didn't have a way to register keystrokes or create the conditions that matched the game. 

For my silver plan, I set out to do the following: 
- figure out how to register keystrokes
- prevent players from entering symbols or special charcters in the boxes (boxes are for letters only) 
- include additional functionality for `backspace` and `enter`





## what's next (improvements) 
