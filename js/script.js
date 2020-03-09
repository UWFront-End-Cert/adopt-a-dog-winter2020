let cart = {
  total: 0,
  dogsCheckout : [],
  add: function (x) {
    /*can not use arrow function, because it will let this to be global*/
    this.load();
    if(this.dogsCheckout.includes(x)) {
      alert('This lovely dog already in your cart.');
      return this.total;
    } else {
      let dog = dogsMap.get(x);
      this.total += dog.adoptFee;
      this.dogsCheckout.push(x);
      this.save();
      render();
      return this.total;
    }
  },
  load: function () {
    let totalData = sessionStorage.getItem('totalInCart');
    if(totalData === null) {
      this.total = 0;
    } else {
      this.total = Number(totalData);
    }

    let dogsData = sessionStorage.getItem('dogsInCart');
    console.log(dogsData);
    if(dogsData === null) {
      this.dogsCheckout = [];
    } else {
      this.dogsCheckout = JSON.parse(dogsData);
    }
  },
  save: function () {
    sessionStorage.setItem('totalInCart', this.total);
    let dogsData = JSON.stringify(this.dogsCheckout);
    console.log('save' + dogsData);
    sessionStorage.setItem('dogsInCart', dogsData);
  }
}

function render() {
  cart.load();
  $('.checkout-total').text('$' + cart.total);
}

render();

/* used closure to protect total
let add = (function() {
  return function(x) {
    cart.total += Number(x);
    $('.checkout-total').text('$' + cart.total);
    return cart.total;
  }
})();
*/
/* before add() move inside the object
function add(x) {
  return cart.add(x);
}
*/

$('.container-dog-card').mouseenter(function() {
  $(this).addClass('container-dog-card-hover');
});

$('.container-dog-card').mouseleave(function() {
  $(this).removeClass('container-dog-card-hover');
});

$('.button-dog-card').click(function() {
  $(this).css('color', '#4056A1');
})
