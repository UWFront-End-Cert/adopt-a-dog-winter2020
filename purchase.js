function handleClick(text) {
  alert(text);
}

let adoptFee = 123.45;

function dogTotal() {
  adoptFee = 123.45;
  alert('$' + adoptFee);
}

const form = document.createElement('form');
const fields = ['Name', 'Address'];

for (let i = 0; i < fields.length; i += 1) {
  const label = document.createElement('label');
  label.textContent = fields[i];
  label.setAttribute('for', fields[i]);

  const input = document.createElement('input');
  input.setAttribute('id', fields[i]);

  form.appendChild(label);
  form.appendChild(input);
}

const formSubmit = document.getElementById('purchase');

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

formSubmit.appendChild(submitButton);

submitButton.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(event.target.elements[0]);
  alert('form submitted');
});
