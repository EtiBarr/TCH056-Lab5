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

    let nb_bomb = 0;
    
    if(nv_dificulter === 0){
        nb_bomb = 5;
    }else if(nv_dificulter === 1){
        nb_bomb = 30;
    }else if(nv_difficulter === 2){
        nb_bomb =140;
    }

    let c_bomb = 0;
    while (c_bomb < nb_bombe){

        for(let i =0; i < rows; i++){
            for(let j = 0; j < colonne; j++){
    
                if(tab[i][j] != bomb){
                    if(tab[i-1][j-1] != bomb
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
                    && i-1 >= 0 && j-1 >=0
                    && i-1 < nbColonnes -1 && j-1 < nbLignes -1){
                    tab[i][j-1] += 1;
                }
                if( tab[i+1][j-1] != bomb
                    && i-1 >= 0 && j-1 >=0
                    && i-1 < nbColonnes -1 && j-1 < nbLignes -1){
                    tab[i+1][j-1] += 1;
                }


                if(  tab[i-1][j] != bomb
                    && i-1 >= 0 && j-1 >=0
                    && i-1 < nbColonnes -1 && j-1 < nbLignes -1){
                    tab[i-1][j] += 1;
                }
                if( tab[i+1][j] != bomb
                    && i-1 >= 0 && j-1 >=0
                    && i-1 < nbColonnes -1 && j-1 < nbLignes -1){
                    tab[i+1][j] += 1;
                }


                if( tab[i-1][j+1] != bomb
                    && i-1 >= 0 && j-1 >=0
                    && i-1 < nbColonnes -1 && j-1 < nbLignes -1){
                    tab[i-1][j+1] += 1;
                }
                if( tab[i][j+1] != bomb
                    && i-1 >= 0 && j-1 >=0
                    && i-1 < nbColonnes -1 && j-1 < nbLignes -1){
                    tab[i][j+1] += 1;
                }
                if( tab[i+1][j+1] != bomb
                    && i-1 >= 0 && j-1 >=0
                    && i-1 < nbColonnes -1 && j-1 < nbLignes -1){
                    tab[i+1][j+1] +=1;
                }

            }

        }
    }
}