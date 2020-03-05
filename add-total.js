
// Add total Section


let totalCost = 0;
let counter = 0;

function handleCounter(cost) {
  totalCost = Number(cost) + totalCost;
  counter++;
  alert(`You have selected ${counter} dog(s) to adopt. Your total price is $${totalCost}`);
}

// Dog-Info-Image Section

function handleClick(dogName, breed, adoptFee) {
  let result = null;
  result = `You clicked on ${dogName}. They are a ${breed} and cost $${adoptFee}`;
  alert(result);
}


// Checkout Submit Section
// On the form page, display an alert that says "Thank you.
// The form information has been received" when the form has been submitted.
// Console log the values inside the form, you can build a string or build an object.


function checkoutSubmit() {
  let result2 = null;
  result2 = 'Thank you!';
  alert(result2);
}
//
// const submitButton = document.createElement('button');
// submitButton.setAttribute('type', 'submit');
// submitButton.textContent = 'submit';
//
// form.appendChild(submitButton)
//
// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   et result2 = null;
//   result = 'Thank you!';
//     event.preventDefault();
//     alert (result2);
//
// })
//
//


// const submitButton = document.createElement('button');
// submitButton.setAttribute('type', 'submit');
// submitButton.textContent = 'Submit';
//
// form.appendChild(submitButton);
//
// form.addEventListener('submit', function(event) {
//   event.preventDefault(); //stops form from refreshing the page.
//   event.target.elements.forEach(function(element) {
//
// for (let i = 0; i < event.target.elements.length - 1; i++) {
//   console.log(event.target.elements[i].value);
// }
//   // console.log(event.target.elements[0].value);
//   console.log('form submitted');
//
// // do things on submit
// });
//
// // unpacking the event
// Look for "Value" field
//
// bodyToChange.appendChild(form);
