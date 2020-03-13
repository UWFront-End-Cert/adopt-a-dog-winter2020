/*  just use javascript to console.log the form info
const form = document.querySelector('form');
const submitButton = document.querySelector('button');
const data = {};

form.addEventListener('submit',function(event){
  event.preventDefault();
  for(let i = 0; i < event.target.elements.length - 1; i++) {
    data[event.target.elements[i].name] = event.target.elements[i].value;
  }
  console.log(data);
});
*/

/* showing dogs' info in cart dynamiclly (dogsMap.get(cart.dogsCheckout[i])).dogImageLink*/
$('.form-text-field').append('<p>Dogs Adopted</p>');
$('.form-text-field').append('<div class="dogs-to-checkout">');
cart.load();
for(let i = 0; i < (cart.dogsCheckout).length; i++) {

  let dogName = cart.dogsCheckout[i];
  let dogObj = dogsMap.get(dogName);
  $('.dogs-to-checkout').append('<img src="' + dogObj.dogImageLink + '">');
  $('.dogs-to-checkout').append('<div id="dogs-to-checkout-' + i + '"></div>');
  $('#dogs-to-checkout-' + i).append('<p class="checkout-dog-name">' + dogName + '</p>');
  $('#dogs-to-checkout-' + i).append('<p>Cost to Adopt: </p>');
  $('#dogs-to-checkout-' + i).append('<p>$' + dogObj.adoptFee + '</p>');
}
$('.form-text-field').append('<p class="total-adoption-cost-text">Total Adoption Cost</p>');
$('.form-text-field').append('<p class="total-adoption-cost-number">$' + cart.total + '</p>');

function message() {
  alert('Thank you. The form information has been received');
}

/*use jquery to console.log the form info
const form = $('form')[0];
const submitButton = $('button')[0];
const data = {};

form.addEventListener('submit',function(event){
  event.preventDefault();
  for(let i = 0; i < event.target.elements.length - 1; i++) {
    data[event.target.elements[i].name] = event.target.elements[i].value;
  }
  console.log(data);
});
*/
/* another way */
$(document).ready(function() {
    $("form").submit(function(e) {
    var val = $("input[type=submit][clicked=true]").val()
    e.preventDefault()
    const formInfo = {};
    console.log(e.target.elements.length);
    for (let i = 0; i < e.target.elements.length; i++) {
      formInfo[e.target.elements[i].name] = e.target.elements[i].value;
    }
    console.log(formInfo);
  })
})
