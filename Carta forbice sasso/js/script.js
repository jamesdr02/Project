let sconfitta = 0;
let pareggio = 0;
let vittoria = 0;
let numeroInserito = 0;


do{
    numeroInserito =+prompt("Inserisci 0 per CARTA, 1 per FORBICE, 2 per sasso, 3 per uscire dal gioco");
    let numeroRandom = Math.floor(Math.random()*3);

if(numeroInserito == numeroRandom){
    pareggio++;
    alert("HAI PAREGGIATO!");
}

else if(numeroInserito == 0 && numeroRandom == 1){
    sconfitta++;
    alert("HAI PERSO!");
}

else if(numeroInserito == 0 && numeroRandom == 2){
    vittoria++;
    alert("HAI VINTO!");
}

else if(numeroInserito == 1 && numeroRandom == 0){
    vittoria++;
    alert("HAI VINTO");
}

else if(numeroInserito == 1 && numeroRandom == 2){
    sconfitta++;
    alert("HAI PERSO!");
}

else if(numeroInserito == 2 && numeroRandom == 0){
    sconfitta++;
    alert("HAI PERSO!");
}

else if(numeroInserito == 2 && numeroRandom == 1){
    vittoria++;
    alert("HAI VINTO!");

}
}while(numeroInserito!=3);
alert("Vittorie: " + vittoria + "\nSconfitte: " + sconfitta + "\nPareggi: " + pareggio);


