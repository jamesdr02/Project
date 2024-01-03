var contatore=1;

function vaiAvanti(){
    contatore++;
    if (contatore > 10){
        contatore = 1;
    }

    document.getElementById("cambioImmagine").src = "../res/img_" + contatore + ".jpg";


}

function vaiIndietro(){
    contatore--;
    if (contatore < 1){
        contatore = 10;
    }

    document.getElementById("cambioImmagine").src = "../res/img_" + contatore + ".jpg"; 
}


