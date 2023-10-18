const draw = document.querySelector('#drawing');

function changeCol(box){
    box.style.backgroundColor = 'black';
}


function makeSquares(sideAmount){
    for (let i = 0; i < sideAmount; ++i){
        const row = document.createElement('div');
        row.style.borderStyle = 'solid';
        row.style.borderColor = 'black';
        row.style.borderWidth = '2px';
        row.style.flex = '1';
        row.style.display = "flex";
        row.style.flexDirection = 'row';
        drawing.appendChild(row);
    
        for(let j = 0; j < sideAmount; ++j){
            const square = document.createElement('div');
            square.style.borderStyle = 'solid';
            square.style.borderColor = 'black';
            square.style.borderWidth = '2px';
            square.style.flex = '1';
            square.addEventListener('mouseover', () => {
                changeCol(square);
            });
            row.appendChild(square);
        }
    
    }
}

makeSquares(25);