/*
**javascript
**/



// prima variabile //
 var email = ["email@francesco.it", "email@dario.it", "email@laura.it"];

 // seconda variabile //

 var emailuser = prompt("Inserisci la tua email").toLowerCase();

 // controllo//

 var userfound = false;


 for( var i = 0;  i < email.length; i++ ){

    var item = email[i];

    if( item === emailuser) {
        userfound = true;
    }

 }

 if(userfound == true) {
   console.log("Utente trovato, procedi con l\"accesso");
 } else(
    console.log("errore di autenticazione")
 )
