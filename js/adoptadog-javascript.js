window.onload = function() {
    $('.dog-box').hover(function(event) {
        $(this).toggleClass('box-border');
    });
}


let totalCost = 0;

function addToCrt(num) {
    totalCost += num;
    alert('Total Fees: ' + '$' + totalCost);
};