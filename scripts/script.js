let total = 0;
let newLine = "\r\n";

function info(dogName, breed, adoptionFees)
{
  total += parseFloat(adoptionFees);

  alert(dogName  + '  '  +  breed + '  ' + '$'+adoptionFees + newLine + 'your total is' + ' ' + '$'+total )
}

function alertSubmit()
{
  var customer = {
     name: document.getElementById("name").value,
     email: document.getElementById("email").value,
     street: document.getElementById("street").value,
     city: document.getElementById("city").value,
     state: document.getElementById("state").value,
     zip: document.getElementById("zip").value,
     firstY: document.getElementById("y").value,
     firstN: document.getElementById("n").value,
     pickup: document.getElementById("pl").value
};
console.log(customer.name + "  " +  customer.email + "  " + customer.street + "  " + customer.city + "  " + customer.state + "  " + customer.zip + "  " + customer.firstY + "  "  + customer.firstN + "  " + customer.pickup );
alert("Thank you. The form information has been received" );
}
