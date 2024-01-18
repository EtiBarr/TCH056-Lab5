function genererGrille(nbLignes, nbColonnes){
    let tblContainer = document.getElementById("grille-jeu");
    let tableau = document.createElement("table");
    let i, j;
    let grille = [];
    for(i= 0; i<nbLignes; i++){
        let ligne = document.createElement("tr");
        grille[i]=[];
        for(j=0; j<nbColonnes; j++){
            let colonne = document.createElement("td");
            colonne.innerHTML = 0;
            ligne.appendChild(colonne);
            grille[i][j] = 0;
        }
        tblContainer.appendChild(ligne);
    }
    tblContainer.appendChild(tableau);
    console.log(grille);
}


function genererGrille(nbLignes, nbColonnes){


}

function ajouterBombes(genererGrille, nv_dificulter){

    for(let i =0; i < rows; i++){
        for(let j = 0; j < close; j++){

            tab[i][j] = "\u{1F4A3}";
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