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
