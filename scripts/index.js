$(document).ready(function() {
    $('.dog-tile').hover(function(event) {
        $(this).toggleClass('dog-border-effect')
    })

    $('.dog-img').hover(function(event) {
        $(this).toggleClass('dog-image-effect')
    })

    $('.btn').hover(function(event) {
        $(this).toggleClass('ripple-hover-effect')
    })

    let balance = 0;

    $('.dog-tile').click(function(event) {
        balance = balance + 123.45;
        $('#total-cost').text(balance)
    })

});
