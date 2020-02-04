var total = 0;

var imageClicked = function(name, fee) {
  alert(name + ' for ' + fee);
}

var adoptClicked = function(fee) {
  total = total + fee;
  alert('Total: $' + total);
}