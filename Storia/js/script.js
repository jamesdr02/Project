const nomi = ["Aldo", "Giovanni", "Giacomo"];
const luoghi = ["Roma", "Napoli", "Torino"]

let testo = "C'erano 95 Fahrenheit quando :protagonista: uscì per una passeggiata al centro di :luogo:";

let form = document.getElementById("storia");

form.addEventListener("submit", function (event){
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    if(nome.length>0){
        testo = testo.replace("protagonista",nome);
    }

    else{
        let x = Math.floor(Math.random()*3);
        testo = testo.replace("protagonista", nomi[x]);
    
    }

    let a = Math.floor(Math.random()*3);
    testo = testo.replace("luogo",luoghi[a]);

    if(document.getElementById("UK").checked == true){
        let temperatura = "35 gradi Celsius";
        testo = testo.replace("95 Fahrenheit", temperatura);
    }

    let paragrafo = document.getElementById("paragrafo");

    paragrafo.innerText = testo;

})




