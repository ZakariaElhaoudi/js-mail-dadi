/*Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.*/

// variabili globali 
const button = document.getElementById ("myButton")
const container =document.getElementById("contenitore")
let vincitore= "";


// Generare un numero random da 1 a 6 per il giocatore
const giocatore = Math.floor(Math.random() * 6) +1 ;
console.log("giocatore " + giocatore);

// Generare un numero random da 1 a 6 per il pc
const computer = Math.floor(Math.random() * 6) +1 ;
console.log("computer " + computer);
button.addEventListener('click',
    function () {
        // confrontare il risultato Stabilire il vincitore 
        if (giocatore > computer) {
            vincitore = "Il giocatore ha vinto !!!" ;
            console.log("Il giocatore ha vinto !!!");
        } else if (giocatore < computer) {
            vincitore = "Il computer ha vinto !!!" ;
            console.log("Il computer ha vinto !!!");
        } else {
            vincitore = "Pareggio!!!"
            console.log("Pareggio!!!");
        }
        container.innerHTML = `<div class="square">${vincitore}</div>`;   
    }
)
     
    



