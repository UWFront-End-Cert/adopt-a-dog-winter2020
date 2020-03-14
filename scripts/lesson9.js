$(document).ready(function() {

  // dog tile hover effect

  $('.dog-img').hover(function(e) {
    $(this).toggleClass('img-outline');
  });


  // update the checkout total on the index & dogs pages with each click of an adopt button (currently not working)

  let balance = 0

  $('#cart-total').text(balance);

  $('.adopt').click(function(e) {
    function dogFees(num) {
    balance += num;
    $('#cart-total').text(balance);
    console.log('whaaat?');
    }
  });

  // console logs form info (currently not working)

  $('#checkout-form').submit(function(event) {

    event.preventDefault();

    const formObject = {};

    for (let i = 0; i < event.target.elements.length - 1; i++) {

      console.log(event.target.elements[i].id);

      formObject[event.target.elements[i].id] = event.target.elements[i].value;
    }

    console.log(formObject);
  });


  // refactor the form submission

  $('#checkout-wrapper').append('<h2 class="h2-padding">Checkout</h2>', '<div class="checkout-main"></div');

  $('.checkout-main').append('<form id="checkout-form"></form>');

  $('#checkout-form').append('<div class="checkout-content"></div>');

  $('.checkout-content').append('<label for="name" class="input-label">Name</label>', '<input type="text" name="name" id="name">', '<label for="email" class="input-label">Email Address</label>', '<input type="email" name="email" id="email">', '<label for="address" class="input-label">Street Address</label>', '<input type="text" name="address" id="address">', '<div class="city-state-zip"></div>');

  $('.city-state-zip').append('<div id="city-div"></div');

  $('#city-div').append('<label for="city" class="cityzip input-label">City</label>', '<input class="city-input" type="text" name="city" id="city">');

  $('.city-state-zip').append('<div id="state-div"></div');

  $('#state-div').append('<label for="state" class="statezip input-label">State</label>')

  $('.statezip').append('<select class="state-select" name="state" id="state"></select>');

  $('.state-select').append('<option value="">-</option>', '<option value="alaska">Alaska</option>', '<option value="oregon">Oregon</option>', '<option value="washington">Washington</option>');

  $('.city-state-zip').append('<div id="zip-div"></div>');

  $('#zip-div').append('<label for="zipcode" class="zip input-label">Zip Code</label>', '<input class="zip-input" type="number" name="zipcode" id="zipcode">');

  $('.checkout-content').append('<span class="input-label">First Time Adopter?</span>');

  $('.checkout-content').append('<div class="radio-input"></div>');

  $('.radio-input').append('<label class="no-label" for="no">No</label>', '<input class="no-input" type="radio" name="adopter" value="no" id="no">', '<label class="yes-label" for="yes">Yes</label>', '<input class="yes-input" type="radio" name="adopter" value="yes" id="yes">');

  $('.checkout-content').append('<label for="pickup" class="input-label">Pickup Location</label>', '<select class="pickup-select" name="pickup" id="pickup"></select');

  $('.pickup-select').append('<option value="">-</option>', '<option value="alaska">Alaska</option>', '<option value="oregon">Oregon</option>', '<option value="washington">Washington</option>');

  $('#checkout-form').append('<section class="dogs-adopted-padding"></section');

  $('.dogs-adopted-padding').append('<h3 class="input-label">Dogs Adopted</h3>', '<div class="dogs-adopted">');

  $('.dogs-adopted').append('<div class="adopt-cost">');

  $('.adopt-cost').append('<img class="adopt-img" src="images/lucas-checkout.jpg" alt="a black dog looking up at the camera">', '<div><h4>Lucas</h4><p>Cost to Adopt: $123.45</p></div>');

  $('.adopt-cost').append('<img class="adopt-img" src="images/duffy-checkout.jpg" alt="a white and brown pitbull">', '<div><h4>Duffy</h4><p>Cost to Adopt: $123.45</p></div>');

  $('#checkout-form').append('<section><h3 class="input-label">Total Adoption Cost</h3><p>$1234.56</p></section>', '<input onclick="submitForm()" class="submit" type="submit" value="Submit" name="submit">');
});
