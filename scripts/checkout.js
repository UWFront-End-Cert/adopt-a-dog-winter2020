$(document).ready(function() {
    $("#submit").click(function(e) {
        for (var i = 0; i < frmCheckout.elements.length - 1; i++) {
            var e = frmCheckout.elements[i];
            console.log(e.name + "=" + e.value);
        }
    });

});
