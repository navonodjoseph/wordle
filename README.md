# wordle
A version of the popular word game using javascript, html, and css. Check out the end result here: https://navonodjoseph.github.io/wordle/

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

## game logic & next steps (silver plan)
I was happy to get a grid made that closely resembled the original Wordle game. I still didn't have a way to register keystrokes or create the conditions that matched the game. 

For my silver plan, I set out to do the following: 
- figure out how to register keystrokes
- prevent players from entering symbols or special charcters in the boxes (boxes are for letters only) 
- include additional functionality for `backspace` and `enter`
- create dictionary that would check to see if word is valid 
- highlight letters in green if correct spot, yellow if contained in word, and dark gray if not part of word.   

The logic is mostly represented in the `registerKeyBoardEvents` function. Because the game is played entirely through the keyboard, I decided to use the `onkeydown` event which allowed me to assign keystrokes to five separate functions including `getCurrentWord`, `isWordValid`, `revealWord`. 

```
function registerKeyBoardEvents (){
    document.body.onkeydown = (e) => {
        const key = e.key; 
        if (key === 'Enter'){
            if (state.currentCol === 5){
            const word = getCurrentWord (); 
            if (isWordValid(word)){
                revealWord(word); 
                state.currentRow++;
                state.currentCol=0; 
            }else{
                alert('not a valid word')
            }
        }
    }
    if (key === 'Backspace'){
        removeLetter(); 
    }
    if (isLetter(key)){
        addLetter(key); 
    }
    updateGrid(); 
    }; 
```
If you do a quick google search, you'll find plenty of code online for building this game. I spent a lot of time looking at solutions made by other developers and built this function using what we've learned so far in class. I'm including this entire function because I learned a lot about building game logic and how a single function can encompass so much. 


## what's next (improvements) 
- expanded dictionary (so far I have maybe 20 words). We haven't used APIs in class but I suspect this will help. 
- better animation. I'm confident I can spend a little more time on the CSS to animate the each box after the guess is registered.
- This is essentially a grid that registers keystrokes. I could build out the dialogue box before and after the game, much like the NYT version that features a timer and differing messages based on the number of guesses.   

