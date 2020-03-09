$('.dog-card').mouseenter(function(e) {
  $(this).addClass('card-shadow');
})

$('.dog-card').mouseleave(function(e) {
  $(this).removeClass('card-shadow');
})

function handleClick(text) {
  alert(text);
}

let adoptFee = 125;

function dogTotal() {
  adoptFee = 125;
  alert('$' + adoptFee);
}

let theTotal = 0;

const adopt = document.getElementById('total');
const cart = document.createElement('div');

$('button').click(function(e){
  theTotal = Number(theTotal) + Number(adoptFee);
  $('#total').text("Total: $" + theTotal);
})
