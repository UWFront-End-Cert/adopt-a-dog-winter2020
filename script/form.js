//Use jQuery and refactor the form submission. Simply console log the form data as before.
$('section').append('<h2>Checkout</h2>');
$('h2').addClass('checkout-headline');
$('h2').append('<form></form>');
$('form').attr('name', 'adoptDogs').attr('method', 'GET');

let formInput = [
  {
    labelName: 'Name',
    inputType: 'text',
    inputName: 'customerName',
    inputId: 'name'
  },

  {
    labelName: 'Email Address',
    inputType: 'email',
    inputName: 'customerEmail',
    inputId: 'email'
  },

  {
    labelName: 'Street Address',
    inputType: 'text',
    inputName: 'customerAddress',
    inputId: 'address'
  }
]

for (let i = 0; i < formInput.length; i++) {
  $('form').append('<label id="label-${i}"></label>');
  $('#label-${i}').html(formInput[i].labelName);
  $('#label-${i}').append('<input id="input-${i}">');
  $('input id="input-${i}"').attr('type', formInput[i].inputType).attr('name', formInput[i].inputName).attr('id', formInput[i].inputId);
}

// $('form').append('<label></label>');
// $('label').html('Name');
// $('label').append('<input>');
// $('input').attr('type', 'text').attr('name', 'customerName').attr('id', 'name');
//
// $('form').append('<label></label>');
// $('label').html('Email Address');
// $('label').append('<input>');
// $('input').attr('type', 'email').attr('name', 'customerEmail').attr('id', 'email');
//
// $('form').append('<label></label>');
// $('label').html('Street Address');
// $('label').append('<input>');
// $('input').attr('type', 'text').attr('name', 'customerAddress').attr('id', 'address');

// $('form').append('<div></div>');
// $('form > div').addClass('city-state-zip').append('<div></div>');

// $('label').html('City');
// $('label').append('<input>');
// $('input').attr('type', 'text').attr('name', 'customerCity').attr('id', 'city');
