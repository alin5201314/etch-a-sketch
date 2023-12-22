function makeGrid(gridContainer){

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }


    const dimension = 50; 
    let cellHeight = gridContainer.clientHeight / dimension;
    for (let i = 0 ; i < dimension * dimension; i ++){
        let grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.height = `${cellHeight}px`; 
        grid.style.width = `${cellHeight}px`; 
        gridContainer.appendChild(grid)
    }
}

function clearGrid(){
    grids.forEach(grid => {
        grid.style.backgroundColor = "white";
        grid.dataset.opacity = 0;
    });
}

function sketchBlack(){
    grids.forEach(grid => {
        grid.addEventListener('mouseover',() => {
            grid.style.backgroundColor = "black";
        })
    });
}

function sketchWhite(){
    grids.forEach(grid => {
        grid.addEventListener('mouseover',() => {
            grid.style.backgroundColor = "white";
        })
    });
}

function sketchColor(){
    grids.forEach(grid => {
        grid.addEventListener('mouseover',() => {
            grid.style.backgroundColor = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`;
        })
    });
}

function sketchClassic() {
    grids.forEach(grid => {
        // Initialize opacity data attribute if it doesn't exist
        if (!grid.dataset.opacity) {
            grid.dataset.opacity = 0;
        }

        grid.addEventListener('mouseover', () => {
            let currentOpacity = parseFloat(grid.dataset.opacity);
            // Increase opacity by 0.1, but not more than 1
            currentOpacity = Math.min(currentOpacity + 0.1, 1);
            grid.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
            grid.dataset.opacity = currentOpacity;
        });
    });
}


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const gridContainer = document.querySelector('div.grid-container')
makeGrid(gridContainer)


const grids = document.querySelectorAll('div.grid')
grids.forEach(grid => {
    grid.addEventListener('mouseover',() => {
        grid.style.backgroundColor = "black";
    })
});


const slider = document.querySelector('.slider');
const rangeValue = document.querySelector('#rangeValue');

// slider.addEventListener('input', () => {
//     rangeValue.textContent = slider.value
//     makeGrid(gridContainer)
// });


const buttonContainer = document.querySelector('.button-container');
buttonContainer.addEventListener('click', (event) => {
    if(event.target.tagName === "BUTTON"){
        const buttonId = event.target.parentElement.id
        switch (buttonId) {
            case "colorButton":
                sketchColor()
                break;
            case "blackButton":
                sketchBlack()
                break;
            case "whiteButton":
                sketchWhite()
                break;
            case "classicButton":
                sketchClassic()
                break;
            case "clearButton":
                clearGrid()
                break;
        
            default:
                break;
        }
    }
})