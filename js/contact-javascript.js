const fields = [
    {
        name: 'full-name',
        label: 'Full Name'
    },
    {
        name: 'email',
        label: 'Email Address'
    },
    {
        name: 'street address',
        label: 'Street Address'
    },
    {
        name: 'city',
        label: 'City'
    },
    {
        name: 'state',
        label: 'State'
    },
    {
        name: 'zip code',
        label: 'Zip Code'
    }
];

window.onload = function() {
    const form = document.createElement('form');
    const contact = document.getElementById('contact');
    contact.appendChild(form);

    for (let i = 0; i < fields.length; i += 1) {
        const field = fields[i];

        const label = document.createElement('label');
        label.setAttribute('for', field.name);
        label.textContent = field.label;

        const inputField = document.createElement('input');
        inputField.setAttribute('id', field.name);

        form.appendChild(label);
        form.appendChild(inputField);
    }

    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you. The form information has been received!');
        let results = document.getElementsByTagName('input');
        for (i = 0; i < results.length; i++) {
            console.log(results[i].value);
        }
    });
}
