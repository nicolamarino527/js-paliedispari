// Palidroma
// Chiedere all’utente di inserire una parola
// Creare trauna funzione per capire se la parola inserita è palindroma



// Chiediamo all utente la parola
let parolaUtente = prompt("Inserisci una parola:");

// Funzione per verificare se una parola è palindroma
function palindroma(parola) {

    // dividiamo la parola in un array, invertiamola e riuniamola
    let parolaInvertita = parola.split('').reverse().join('');

    // controlliamo se le due parole sono uguali
    return parola === parolaInvertita;
}

// Verificiamo che la parola isa palindroma e comunichiamo il risultato all utente

if (palindroma(parolaUtente)) {
    console.log(`La parola "${parolaUtente}" è palindroma!`);
} else {
    console.log(`La parola "${parolaUtente}" non è palindroma.`);
}









//Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// chiediamo all utente se punta sul pari o sul dispari

let sceltaGiocatore = prompt("pari o dispari?");

// chidiamo successivamente quale numero scegie (compreso tra 1 e il 5)

let numeroGiocatore = parseInt(prompt("scegli un numero da 1 a 5"));
while (isNaN(numeroGiocatore) || numeroGiocatore < 1 || numeroGiocatore > 5) {
    numeroGiocatore = parseInt(prompt("Numero non valido. Scegli un numero da 1 a 5:"));
}

// Creiamo la funzione

function pariODispari(scelta, numeroGiocatore) {

    // creiamo il numero casuale del computer
    let numeroCasuale = Math.floor(Math.random() * 5) + 1;
    console.log(`Numero casuale del computer: ${numeroCasuale}`);

    // sommiamo il numero della macchina al numero del giocatore
    let somma = numeroGiocatore + numeroCasuale;
    console.log(`Somma dei numeri: ${somma}`);

    // Verifichiamo se è pari o dispari (utilizzando un oerator ternario)
    let risultato = somma % 2 === 0 ? "pari" : "dispari";
    console.log(`Il numero è ${risultato}`);

    if (scelta === risultato) {
        console.log("Hai vinto!");
    } else {
        console.log("Hai perso!");
    }
}
// Eseguiamo la funzione
pariODispari(sceltaGiocatore, numeroGiocatore);