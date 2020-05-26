//Surname list (Arrey)
var surnameList = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];

//List Element
var surnameList = document.getElementById('surname-list');

//Add surname Form
var addSurname = document.getElementById('add-surname');

//Event button
var generateListBtn = document.getElementById('generate-list');

//Add Surname to the list
generateListBtn.addEventListener('click',
  function() {
    //add user surname to the existing list
    surnameList.push(addSurname.value);

    //Sort list in Alphabetical Order
    var alphabeticalOrderList = surnameList.sort();

    //Print to screen the result
    for (var i = 0; i < surnameList.length; i++) {
      var contenutoCorrente = surnameList.innerHTML;
      surnameList.innerHTML = contenutoCorrente + '<li>' + alphabeticalOrderList[i] + '</li>';
    }
  }
)
