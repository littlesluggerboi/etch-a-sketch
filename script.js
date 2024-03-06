const WIDTH = 1020;
const createBtn = document.querySelector('button');
createBtn.addEventListener('click', renderGrid);

function askSideLength() {
    while (true) {
        try {
            let input = prompt('How many squares per side?');
            if(input <0 || input>100){
                throw "Input invalid";
            }
            return input;
            break;
        }catch{
            alert('Run into some problem!');
            alert('try again.');
        }
    }

}
function removeGrid(){
    if(document.body.children.length > 2){
        document.body.children[2].remove();
    }
}
function renderGrid() {
    removeGrid()
    const side = askSideLength();
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.classList.add('container');
    const lengthOfSquare = Math.sqrt((WIDTH*WIDTH) / (side * side));
    container.style.maxHeight=`${WIDTH+(4*side)}px`;
    container.style.maxWidth=`${WIDTH+(4*side)}px`;
    // container.style.minWidth=`${960+2*side}px`;
    // container.style.minHeight=`${960+2*side}px`;
    body.appendChild(container);
    for (let i = 0; i < (side * side); i++) {
        const square = document.createElement('div');
        square.style.width = `${lengthOfSquare}px`;
        square.style.height = `${lengthOfSquare}px`;
        square.classList.add('square');
        square.addEventListener('mouseover', changeBackground)
        container.appendChild(square);
    }
}

function changeBackground(e) {
    e.target.classList.add('hover');
}