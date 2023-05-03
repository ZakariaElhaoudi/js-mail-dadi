/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

// variabili globali 


// Generare un numero random da 1 a 6 per il giocatore
const giocatore = Math.floor(Math.random() * 6) +1 ;
console.log("giocatore " + giocatore);

// Generare un numero random da 1 a 6 per il pc
const computer = Math.floor(Math.random() * 6) +1 ;
console.log("computer " + computer);

// confrontare il risultato Stabilire il vincitore 
if (giocatore > computer) {
    console.log("Il giocatore ha vinto !!!");
} else if (giocatore < computer) {
    console.log("Il computer ha vinto !!!");
} else {
    console.log("Pareggio!!!");
}





