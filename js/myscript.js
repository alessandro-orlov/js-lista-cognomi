//Surname list (Arrey)
var surnameList = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

//Add surname Form
var userSurname = document.getElementById('user-surname');
var generateListBtn = document.getElementById('generate-list');

//List Element - Lista invitati
var elementList = document.getElementById('surname-list');

// for(var i = 0; i < surnameList.length; i++) {
//   var fullList = elementList.innerHTML;
//   elementList.innerHTML = fullList + '<li>' + surnameList[i] + '</li>'
// }

//Add user surname to the list
generateListBtn.addEventListener( 'click',
  function() {
    //Error se il campo è vuoto
    if(userSurname.value == '') {
      alert('Non hai inserito il cognome');
    } else {

      //Add user Surname to the Arrey
      surnameList.push(userSurname.value);

      surnameList.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
        }); // si è stackverflkow!

      // // Add user's surname to the existing list
      // for(var i = 0; i < surnameList.length; i++) {
      // var fullList = elementList.innerHTML;
      // }
      // elementList.innerHTML = fullList + '<li>' + userSurname.value + '</li>'

      //Add whole list in alphabetical order
      for(var i = 0; i < surnameList.length; i++) {
        var fullList = elementList.innerHTML;
        elementList.innerHTML = fullList + '<li>' + surnameList[i] + '</li>'
      }

      var surnameNumber = document.getElementById('surname_position');
      surnameNumber.innerHTML = "Il tuo cognome si trova alla posizione numero # " + (surnameList.indexOf(userSurname.value)+1);

      console.log(surnameList)
    }
  }
);

// var orderSurnameBtn = document.getElementById('order-surname-btn');
//
// orderSurnameBtn.addEventListener('click',
//   function() {
//     surnameList.sort();
//     console.log(surnameList)
//
//    for(var i = 0; i < surnameList.length; i++) {
//    var fullList = elementList.innerHTML;
//    elementList.innerHTML = fullList + '<li>' + surnameList[i] + '</li>'
//      }
//   }
// );
