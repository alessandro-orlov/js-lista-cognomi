//Surname list (Arrey)
var surnameList = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

//Add surname Form
var userSurname = document.getElementById('user-surname');
var generateListBtn = document.getElementById('generate-list');

//List Element - Lista invitati
var elementList = document.getElementById('surname-list');

for(var i = 0; i < surnameList.length; i++) {
  var fullList = elementList.innerHTML;
  elementList.innerHTML = fullList + '<li>' + surnameList[i] + '</li>'
}

//Add user surname to the list
generateListBtn.addEventListener( 'click',
  function() {
    //Error se il campo è vuoto
    if(userSurname.value == '') {
      alert('Non hai inserito il cognome');
    } else {
      //aggiunge
      surnameList.push(userSurname.value);

    for(var i = 0; i < surnameList.length; i++) {
      var fullList = elementList.innerHTML;
      elementList.innerHTML = fullList + '<li>' + surnameList[i] + '</li>'
      }
    }
  }
);
