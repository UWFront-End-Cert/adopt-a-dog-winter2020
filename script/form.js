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
    labelName: 'Email',
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
  $('form').append('<label></label>');
  $('label').html(formInput[i].labelName);
  $('label').append('<input>');
  $('input').attr('type', formInput[i].inputType).attr('name', formInput[i].inputName).attr('id', formInput[i].inputId);
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
