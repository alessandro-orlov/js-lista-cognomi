//Surname list (Arrey)
var surnameList = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

//List Element
var elementList = document.getElementById('surname-list');


//Add surname Form
var addSurname = document.getElementById('add-surname');

//Event button
var generateListBtn = document.getElementById('generate-list');

//Add Surname to the list
generateListBtn.addEventListener('click',
  function() {
    //add user surname to the existing list
    surnameList.push(addSurname.value);
    var alphabeticalOrderList = surnameList.sort();

    for (var i = 0; i < surnameList.length; i++) {
      var contenutoCorrente = elementList.innerHTML;
      elementList.innerHTML = contenutoCorrente + '<li>' + surnameList[i] + '</li>';
    }
  }
)
