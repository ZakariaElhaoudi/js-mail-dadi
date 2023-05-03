/*Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.*/

// variabili globali 
const button = document.getElementById ("myButton")
const container =document.getElementById("contenitore")
let accesoRisultato= "";
let trovato = false;

// crea lista di chi può accedere
const emailList = ["marco@gmail.com","luca@gmail.com","carlo@gmail.com","gino@gmail.com","elisa@gmail.com",]


button.addEventListener('click',
    function () {
        
        // Chiedi all’utente la sua email
        const emailUser =document.getElementById("email").value ;
        
        // crea ciclo 
        for (let i = 0; i < emailList.length; i++) {
            const contEmail = emailList[i];
        
            if (contEmail === emailUser) {  //controlla che sia nella lista di chi può accedere
                accesoRisultato = "Acceso consentito ";  
                trovato = true; // imposta a true
            } 
        } 

        if (trovato) {
            accesoRisultato = "Acceso consentito ";  
        } else {
            accesoRisultato = "Acceso negativo ";  
        }

        // crea output 
        console.log(accesoRisultato);
        container.innerHTML = `<div class="square">${accesoRisultato}</div>`;    
    }
)
 
