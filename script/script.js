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

//On the form page, display an alert that says "Thank you. The form information has been received" when the form has been submitted.
function submitAlert() {
  alert('Thank you. The form information has been received.')
}

//Console log the values inside the form; you can build a string or build an object.
document.addEventListener('submit', function(e) {
  e.preventDefault();
  const formInfo = {};

  for (let i = 0; i < e.target.elements.length - 1; i++) {
    formInfo[e.target.elements[i].id] = e.target.elements[i].value;
  }

  console.log(formInfo);
})

//hover effect that gives the tile an outline, or give it a box shadow.
$('.dog-container').hover(function() {
  $('.dog-container > img').animate({
    left: '240px',
    width: '100%'
  })
})

// animate({
//   transform: 'rotate(135deg)'
// });
