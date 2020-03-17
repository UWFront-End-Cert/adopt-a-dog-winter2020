$(document).ready(function() {
                   $('.dogs-dog-tile').hover(function (event) {
                   $(this).toggleClass('dog-border-effect')
           })

           $('.dog-img').hover(function (event) {
           $(this).toggleClass('dog-image-effect')
   })
   $('.btn').hover(function (event) {
   $(this).toggleClass('ripple-hover-effect')
})
$('.btn').active(function (event) {
$(this).toggleClass('ripple-active-effect')
})
       });
