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


