squareSec = document.querySelector('#squareSec');

function changeCol(box){
    box.style.backgroundColor = 'black';
}


function makeSquares(sideAmount){
    for (let i = 0; i < sideAmount; ++i){
        const draw = document.querySelector('#drawing');
        const row = document.createElement('div');
        row.style.flex = '1';
        row.style.display = "flex";
        row.style.flexDirection = 'row';
        draw.appendChild(row);
    
        for(let j = 0; j < sideAmount; ++j){
            const square = document.createElement('div');
            square.style.borderStyle = 'solid';
            square.style.borderColor = 'lightGrey';
            square.style.borderWidth = '1px';
            square.style.flex = '1';
            square.addEventListener('mouseover', () => {
                changeCol(square);
            });
            row.appendChild(square);
        }
    
    }
}

makeSquares(16);

reset = function(){
    let validIn = true;
    let userNum = '';
    do{
        userNum = prompt('Enter the number of squares per side, between 0 and 100')
        userNum = Number(userNum);
        if((userNum == NaN) || (userNum < 0) || (userNum > 100)){
            validIn = false;
        }
        else{
            validIn = true;
        }
    }
    while(!validIn);

    let currDraw = document.querySelector('#drawing');

    squareSec.removeChild(currDraw);
    currDraw = document.createElement('div');
    currDraw.id = 'drawing';
    squareSec.appendChild(currDraw);

    makeSquares(userNum);
}

resButt = document.querySelector('button');
resButt.addEventListener('click', reset);