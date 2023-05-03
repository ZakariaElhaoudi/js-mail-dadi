/*Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.*/

// variabili globali 
const container =document.getElementById("contenitore")

// Chiedi all’utente la sua email
const emailUser =prompt("inserire email") ;
let accesoRisultato= "";

// crea lista di chi può accedere
const emailList = ["marco@gmail.com","luca@gmail.com","carlo@gmail.com","gino@gmail.com","elisa@gmail.com",]

// crea ciclo 
for (let i = 0; i < emailList.length; i++) {
    const contEmail = emailList[i];
    // console.log(contEmail);
    
    if (contEmail === emailUser) {  //controlla che sia nella lista di chi può accedere
        accesoRisultato = "Acceso consentito ";  
    } else {
        accesoRisultato = "Acceso negato"
    }
    container.innerHTML += `<div class="square">${accesoRisultato}</div>`;
    // crea output 
}
console.log(accesoRisultato);
    

 
