function genererGrille(nbLignes, nbColonnes){
    let tblContainer = document.getElementById("grille-jeu");
    let tableau = document.createElement("table");
    let i, j;
    for(i= 0; i<nbLignes; i++){
        let ligne = document.createElement("tr");
        for(j=0; j<nbColonnes; j++){
            let colonne = document.createElement("td");
            colonne.innerHTML = 0;
            ligne.appendChild(colonne);
        }
        tblContainer.appendChild(ligne);
    }
    tblContainer.appendChild(tableau);
}



function ajouterBombes(genererGrille, nv_dificulter){

    const bomb = "\u{1F4A3}";

    let nb_bomb = 0;

    if(nv_dificulter === 0){
        nb_bomb = 5;
    }else if(nv_dificulter === 1){
        nb_bomb = 30;
    }else if(nv_difficulter === 2){
        nb_bomb =140;
    }

    let c_bomb = 0;

    for(c_bomb of nb_bomb){

        for(let i =0; i < rows; i++){
            for(let j = 0; j < colonne; j++){
    
                let rando = Math.floor(Math.random() * 10);
                if(rando === 2){
                    if(c_bomb <= nb_bomb){
                    if(tab[i][j] != bomb
                        && i-1 >= 0 && j-1 >=0
                        && i-1 < nbColonnes -1 && j-1 < nbLignes -1 ){
                            tab[i-1][j-1] = bomb;
                            c_bomb++;
                            }
                        }
                    }
                }
            }
        }
    }
    
    


function remplirGrille (nbColonnes, nbLignes){

    const bomb = "\u{1F4A3}";
    
    for(let i =0; i < rows; i++){
        for(let j = 0; j < colonne; j++){

            if(tab[i][j] === bomb){
                if(tab[i-1][j-1] != bomb
                    && i-1 >= 0 && j-1 >=0
                    && i-1 < nbColonnes -1 && j-1 < nbLignes -1 ){
                    tab[i-1][j-1]+= 1;
                }
                if( tab[i][j-1] != bomb
                    && i >= 0 && j-1 >=0
                    && i < nbColonnes -1 && j-1 < nbLignes -1){
                    tab[i][j-1] += 1;
                }
                if( tab[i+1][j-1] != bomb
                    && i+1 >= 0 && j-1 >=0
                    && i+1 < nbColonnes -1 && j-1 < nbLignes -1){
                    tab[i+1][j-1] += 1;
                }


                if(  tab[i-1][j] != bomb
                    && i-1 >= 0 && j >=0
                    && i-1 < nbColonnes -1 && j < nbLignes -1){
                    tab[i-1][j] += 1;
                }
                if( tab[i+1][j] != bomb
                    && i+1 >= 0 && j >=0
                    && i+1 < nbColonnes -1 && j < nbLignes -1){
                    tab[i+1][j] += 1;
                }


                if( tab[i-1][j+1] != bomb
                    && i-1 >= 0 && j+1 >=0
                    && i-1 < nbColonnes -1 && j+1 < nbLignes -1){
                    tab[i-1][j+1] += 1;
                }
                if( tab[i][j+1] != bomb
                    && i >= 0 && j+1 >=0
                    && i < nbColonnes -1 && j+1 < nbLignes -1){
                    tab[i][j+1] += 1;
                }
                if( tab[i+1][j+1] != bomb
                    && i+1 >= 0 && j+1 >=0
                    && i+1 < nbColonnes -1 && j+1 < nbLignes -1){
                    tab[i+1][j+1] +=1;
                }

            }
            
            switch(tab[i][j]){
                case 0:
                document.getElementsByTagNameNS(td).style.color = 'lightgray';
                break;

                case 1:
                document.getElementsByTagNameNS(td).style.color = 'blue';
                break; 

                case 2:
                document.getElementsByTagNameNS(td).style.color = 'green';
                break;

                case 3:
                document.getElementsByTagNameNS(td).style.color = 'red';
                break;

                case 4:
                document.getElementsByTagNameNS(td).style.color = 'purple';
                break;

                case 5:
                document.getElementsByTagNameNS(td).style.color = 'maroon';
                break;

                case 6:
                document.getElementsByTagNameNS(td).style.color = 'turquoise';
                break;

                case 7:
                document.getElementsByTagNameNS(td).style.color = 'black';
                break;

                case 8:
                document.getElementsByTagNameNS(td).style.color = 'darkgreen';
                break; 
            }

        }
    }

}

let grid = [];

function startGame(difficulty) {
    let gridSize, bombCount;

    switch (difficulty) {
        case 'easy':
            gridSize = 5;
            bombCount = 5;
            break;
        case 'medium':
            gridSize = 10;
            bombCount = 30;
            break;
        case 'hard':
            gridSize = 20;
            bombCount = 140;
            break;
        default:
            return;
    }

    generateGrid(gridSize, gridSize, bombCount);
    displayGrid();
}

function generateGrid(nbRows, nbCols, bombCount) {
    // Initialize an empty grid
    grid = Array.from({ length: nbRows }, () => Array(nbCols).fill(0));

    // Place bombs randomly
    for (let i = 0; i < bombCount; i++) {
        let row, col;
        do {
            row = Math.floor(Math.random() * nbRows);
            col = Math.floor(Math.random() * nbCols);
        } while (grid[row][col] === 'B');
        grid[row][col] = 'B';
    }
}

function displayGrid() {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';

    grid.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
            const cellElement = document.createElement('div');
            cellElement.className = 'cell';
            cellElement.textContent = cell === 'B' ? '💣' : '';
            gridContainer.appendChild(cellElement);
        });
    });
}
