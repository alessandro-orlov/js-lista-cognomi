//Lista di cognomi (Arrey)
var listaCognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

// Chidere cognome all'utente
var cognomeUtente = prompt('Quale il tuo cognome ?');

//Inserirlo nella lista
listaCognomi.push(cognomeUtente);

for(var i = 0; i < listaCognomi.length; i++) {
  console.log(listaCognomi[i]);
}

//Output
