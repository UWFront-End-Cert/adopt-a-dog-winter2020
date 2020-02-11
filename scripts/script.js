//click dog pictures - alerts dog info

function dogInfo(nameFees) {
  alert(nameFees);
}

// click adopt button - alerts total cost

let totalCost = 0;

function dogFees(num) {
  totalCost += num;
  alert('Total Fees: ' + '$' + totalCost / 100);
}
