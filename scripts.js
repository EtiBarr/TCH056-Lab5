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