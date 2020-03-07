let submittedForms = [];

window.onload = function() {  
    let checkoutForm = $('form')[0];

    checkoutForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let checkoutInfo = {
            name: null,
            emailAddress: null,
            streetAddress: null,
            city: null,
            state: null,
            zipCode: null,
            firstTimeAdopterYes: null,
            firstTImeAdopterNo: null,
            pickUpLocation: null
        }

        //update object
        checkoutInfo.name = $('#coName').val();
        checkoutInfo.emailAddress = $('#coEmail').val();
        checkoutInfo.streetAddress = $('#coStaddr').val();
        checkoutInfo.city = $('#coCity').val();
        checkoutInfo.state = $('#coState').val();
        checkoutInfo.zipCode = $('#coZipcode').val();
        checkoutInfo.firstTimeAdopterYes = $('#coFirsttimeYes').val();
        checkoutInfo.firstTImeAdopterNo = $('#coFirsttimeNo').val();
        checkoutInfo.pickUpLocation = $('#coPickup').val();

        //store object into a list
        submittedForms.push(checkoutInfo);
        console.log(checkoutInfo);

        alert('Thank you. The form information has been received');
    })
}
