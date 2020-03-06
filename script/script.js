//Create click handlers that alerts the dog’s information when clicking on the dog’s photo.
function dogInfo(name, breed, cost) {
  result = 'Name: ' + name + '\n' + 'Breed: ' + breed + '\n' + 'Cost: ' + cost;
  alert(result);
  //alert('Name: (name)\nBreed: (breed)\nCost: (cost)');
}

//Create click handlers on each dog’s button that will add to the total.
//Alert this total.
let total = 0;

function addValue(num) {
  total += num;
  alert(`Your total is $` + total + '.');
}

//On the form page, display an alert that says "Thank you. The form information has been received" when the form has been submitted.
function submitAlert() {
  alert('Thank you. The form information has been received.')
}

//Console log the values inside the form; you can build a string or build an object.
document.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(e);

  const formInfo = {};

  for (let i = 0; i < e.target.elements.length - 1; i++) {
    console.log(e.target.elements[i].id);
    formInfo[e.target.elements[i].id] = e.target.elements[i].value;
  }

  console.log(formInfo);
})




// const form = document.querySelector('form');
//
// form.addEventListener('submit', function(event) {
//   let formInfo = {
//     formName: 'Name',
//     formEmail: 'Email Address',
//     formAddress: 'Street Address',
//     formCity: 'City',
//     formState: 'State',
//     formZip: 'Zip Code',
//     formQuestion: 'Yes' || 'No',
//     formPickup: 'Pickup Location'
//   }
//
//   event.preventDefault();
//   for (let i = 0; i < event.target.element.length; i++); {
//     console.log(event.target.element[i].value);
//   }
// })
