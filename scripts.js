function genererGrille(nbLignes, nbColonnes){
    let difficulty = document.getElementById("boutton");
    let tableau = document.createElement("table");
    let i, j;
    for(i= 0; i<nbLignes; i++){
        for(j=0; j<nbColonnes; j++){
            let ligne = tableau.insertRow(i);
            let colonne = ligne.insertCell(j);
            colonne.textContent= `${i}-${j}`;
        }
    }

    let nbPixels = 500/nbColonnes;
    let tabcontainer = document.getElementsByClassName("table-container");
    gridContainer.innerHTML = "table-container";
    gridContainer.appendChild(table);
}