let grille = [];
const bombe = "💣";

function genererGrille(nbLignes, nbColonnes) {

    let tailleGrille = nbColonnes * nbLignes;
    let gridWidth = nbColonnes;

    if (tailleGrille === 25) {
        difficulte = 'facile';
      } else if (tailleGrille === 100) {
        difficulte = 'moyen';
      } else if (tailleGrille === 400) {
        difficulte = 'difficile';
      }

  $('html').css('--gridWidth', gridWidth);

      for(let i = 0; i < nbLignes; i++){
        const row = [];
        for(let j = 0; j< nbColonnes; j++){
            row.push(0);
        }
        grille.push(row);
      }

  ajouterBombes(grille, difficulte);

}  

function ajouterBombes(grille, difficulte) {

    let nbBombe;

    if (difficulte === 'facile') {
        nbBombe = 5;
      } else if (difficulte === 'moyen') {
        nbBombe = 30;
      } else if (difficulte === 'difficile') {
        nbBombe = 140;
      } 
 
    let bombCount = 0; 
    while(bombCount < nbBombe ){
   
        let i = Math.floor(Math.random() * grille.length);
        let j = Math.floor(Math.random() * grille[0].length);

        if (grille[i][j] === bombe) {
        } else {
            grille[i][j] = bombe;
        bombCount++;
        }
  } 
 
  let nbLignes = grille.length;
  let nbColonnes = grille.length;

  //remplirGrille(grille, nbLignes, nbColonnes);

  afficherGrille(grille);

}

/* 
function remplirGrille (grille, nbLignes , nbColonnes){

    
    for(let i =0; i < nbLignes; i++){
        for(let j = 0; j < nbColonnes; j++){

            if(grille[i][j] === bombe){
                if(grille[i-1][j-1] != bombe
                    && i-1 >= 0 && j-1 >=0
                    && i-1 < nbLignes && j-1 < nbColonnes  ){
                        grille[i-1][j-1]+= 1;
                }
                if( grille[i][j-1] != bombe
                    && i >= 0 && j-1 >=0
                    && i < nbLignes && j-1 < nbColonnes ){
                        grille[i][j-1] += 1;
                }
                if( grille[i+1][j-1] != bombe
                    && i+1 >= 0 && j-1 >=0
                    && i+1 <nbLignes  && j-1 <nbColonnes ){
                        grille[i+1][j-1] += 1;
                }


                if(  grille[i-1][j] != bombe
                    && i-1 >= 0 && j >=0
                    && i-1 <nbLignes  && j < nbColonnes ){
                        grille[i-1][j] += 1;
                }
                if( grille[i+1][j] != bombe
                    && i+1 >= 0 && j >=0
                    && i+1 <nbLignes  && j < nbColonnes ){
                        grille[i+1][j] += 1;
                }


                if( grille[i-1][j+1] != bombe
                    && i-1 >= 0 && j+1 >=0
                    && i-1 < nbLignes && j+1 < nbColonnes ){
                        grille[i-1][j+1] += 1;
                }
                if( grille[i][j+1] != bombe
                    && i >= 0 && j+1 >=0
                    && i <nbLignes  && j+1 < nbColonnes ){
                        grille[i][j+1] += 1;
                }
                if( grille[i+1][j+1] != bombe
                    && i+1 >= 0 && j+1 >=0
                    && i+1 < nbLignes  && j+1 <nbColonnes ){
                        grille[i+1][j+1] +=1;
                }

            }

        }
    }
    afficherGrille();

}
*/
 
 
function afficherGrille(grille) {
    
  const gameContainer = document.getElementById('mine-box');
  gameContainer.innerHTML = ''; 

  for (let i = 0; i < grille.length; i++) {
    for (let j = 0; j < grille[i].length; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = grille[i][j];
      gameContainer.appendChild(cell);
    }
  }
}






/*
function genererGrille(nbLignes, nbColonnes){

    let grille = []

    for(let i=0; i<= nbLignes; i++){

        // Initialiser la nouvelle ligne
        let nouvelleLigne = [];
        
        // Construire la nouvelle ligne
        for(let j=0; j<nbColonnes; j++){
            nouvelleLigne.push(0);
        }

        // Ajouter la nouvelle ligne au tableau
        grille.push(nouvelleLigne)

    }

    return grille;

}

console.log(genererGrille(5,5));

function ajouterBombes(rows, colonne, nv_dificulter){

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
    
    


function remplirGrille (nbColonnes, nbLignes, nv_dificulter){

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

        }
    }

}

function afficherGrille(grille, nv_dificulter) {
    let gridContainer = $('grid-container');
    let tableau = getElementsByTagNameNS("table");
    let lignes = getElementsByTagNameNS("tr");
    gridContainer.innerHTML = '';
    
    genererGrille(nbLignes, nbColonnes);
    ajouterBombes(grille, nv_dificulter); 
    remplirGrille(grille, nv_dificulter); 
    

    for(let i=0; i<nbLignes; i++){
        let cellule = $("<div></div>");
        for(let j=0; j<nbColonnes; j++){
            switch(grille[i][j]){
                case 0:
                cellule.css('color', 'lightgray');
                break;

                case 1:
                cellule.css('color', 'blue');
                break; 

                case 2:
                cellule.css('color', 'green');
                break;

                case 3:
                cellule.css('color', 'red');
                break;

                case 4:
                cellule.css('color', 'purple');
                break;

                case 5:
                cellule.css('color', 'maroon');
                break;

                case 6:
                cellule.css('color', 'turquoise');
                break;

                case 7:
                cellule.css('color', 'black');
                break;

                case 8:
                cellule.css('color', 'darkgreen');
                break; 
            }
            
            gridContainer.appendChild(cellule);
        }
    }
}

*/