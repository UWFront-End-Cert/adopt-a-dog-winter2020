let submittedForms = [];

window.onload = function() {  
    let checkoutForm = document.getElementsByTagName('form')[0];

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
        checkoutInfo.name = document.getElementById('coName').value;
        checkoutInfo.emailAddress = document.getElementById('coEmail').value;
        checkoutInfo.streetAddress = document.getElementById('coStaddr').value;
        checkoutInfo.city = document.getElementById('coCity').value;
        checkoutInfo.state = document.getElementById('coState').value;
        checkoutInfo.zipCode = document.getElementById('coZipcode').value;
        checkoutInfo.firstTimeAdopterYes = document.getElementById('coFirsttimeYes').value;
        checkoutInfo.firstTImeAdopterNo = document.getElementById('coFirsttimeNo').value;
        checkoutInfo.pickUpLocation = document.getElementById('coPickup').value;

        //store object into a list
        submittedForms.push(checkoutInfo);
        console.log(checkoutInfo);

        alert('Thank you. The form information has been received');
    })
}
