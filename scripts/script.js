let total = 0;
let newLine = "\r\n";

function info(dogName, breed, adoptionFees)
{
  total += parseFloat(adoptionFees);

  alert(dogName  + '  '  +  breed + '  ' + '$'+adoptionFees + newLine + 'your total is' + ' ' + '$'+total )
}
