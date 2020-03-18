window.onload = function() {
    $('.dog-box').hover(function(event) {
        $(this).toggleClass('box-border');
    })

    let totalCost = 0;

    function addToCart(num) {
        totalCost += num;
        alert('Total Fees: ' + '$' + totalCost);
    };
}




/*  let balance = 0;

    $('#cart-total').text(balance);

    $('dog-box').click(function(e) {
        console.log('clicked a dog');

*/