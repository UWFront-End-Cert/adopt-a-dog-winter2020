function handleClick(text) {
  alert(text);
}

let adoptFee = 123.45;

function dogTotal() {
  adoptFee = 123.45;
  alert('$' + adoptFee);
}

// const formArray = [
//     {
//     name: 'Name',
//     label: 'Name',
//   },
//
//   {
//     name: 'Address',
//     label: 'Address',
//   },
//
//   {
//     name: 'City',
//     label: 'City',
//   },
//
//   {
//     name: 'State',
//     label: 'State',
//   },
//
//   {
//     name: 'Zip Code',
//     label: 'Zip Code',
//   },
//
//   {
//     name: 'First Time',
//     label: 'First Time Adopter?',
//     input: 'radio',
//   }
// ];
//
// const checkout = document.getElementById('form');
// const content = document.createElement('div');
// const fields = ['Name', 'Address', 'City', 'State', 'Zip Code', 'First Time Adopter?'];
//
// for (let i = 0; i < fields.length; i += 1) {
//   const label = document.createElement('label');
//   label.textContent = fields[i];
//   label.setAttribute('for', fields[i]);
//
//   const input = document.createElement('input');
//   input.setAttribute('id', fields[i]);
//
//   form.appendChild(label);
//   form.appendChild(input);
// }

const formSubmit = document.getElementById('form');

const usStates = [
  { name: 'ALABAMA', abbreviation: 'AL'},
  { name: 'ALASKA', abbreviation: 'AK'},
  { name: 'ARIZONA', abbreviation: 'AZ'},
  { name: 'ARKANSAS', abbreviation: 'AR'},
  { name: 'CALIFORNIA', abbreviation: 'CA'},
  { name: 'COLORADO', abbreviation: 'CO'},
  { name: 'CONNECTICUT', abbreviation: 'CT'},
  { name: 'DELAWARE', abbreviation: 'DE'},
  { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
  { name: 'FLORIDA', abbreviation: 'FL'},
  { name: 'GEORGIA', abbreviation: 'GA'},
  { name: 'HAWAII', abbreviation: 'HI'},
  { name: 'IDAHO', abbreviation: 'ID'},
  { name: 'ILLINOIS', abbreviation: 'IL'},
  { name: 'INDIANA', abbreviation: 'IN'},
  { name: 'IOWA', abbreviation: 'IA'},
  { name: 'KANSAS', abbreviation: 'KS'},
  { name: 'KENTUCKY', abbreviation: 'KY'},
  { name: 'LOUISIANA', abbreviation: 'LA'},
  { name: 'MAINE', abbreviation: 'ME'},
  { name: 'MARYLAND', abbreviation: 'MD'},
  { name: 'MASSACHUSETTS', abbreviation: 'MA'},
  { name: 'MICHIGAN', abbreviation: 'MI'},
  { name: 'MINNESOTA', abbreviation: 'MN'},
  { name: 'MISSISSIPPI', abbreviation: 'MS'},
  { name: 'MISSOURI', abbreviation: 'MO'},
  { name: 'MONTANA', abbreviation: 'MT'},
  { name: 'NEBRASKA', abbreviation: 'NE'},
  { name: 'NEVADA', abbreviation: 'NV'},
  { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
  { name: 'NEW JERSEY', abbreviation: 'NJ'},
  { name: 'NEW MEXICO', abbreviation: 'NM'},
  { name: 'NEW YORK', abbreviation: 'NY'},
  { name: 'NORTH CAROLINA', abbreviation: 'NC'},
  { name: 'NORTH DAKOTA', abbreviation: 'ND'},
  { name: 'OHIO', abbreviation: 'OH'},
  { name: 'OKLAHOMA', abbreviation: 'OK'},
  { name: 'OREGON', abbreviation: 'OR'},
  { name: 'PENNSYLVANIA', abbreviation: 'PA'},
  { name: 'RHODE ISLAND', abbreviation: 'RI'},
  { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
  { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
  { name: 'TENNESSEE', abbreviation: 'TN'},
  { name: 'TEXAS', abbreviation: 'TX'},
  { name: 'UTAH', abbreviation: 'UT'},
  { name: 'VERMONT', abbreviation: 'VT'},
  { name: 'VIRGINIA', abbreviation: 'VA'},
  { name: 'WASHINGTON', abbreviation: 'WA'},
  { name: 'WEST VIRGINIA', abbreviation: 'WV'},
  { name: 'WISCONSIN', abbreviation: 'WI'},
  { name: 'WYOMING', abbreviation: 'WY' }
];

const stateSelect = document.getElementById('state');

for (let i = 0; i < usStates.length; i++) {
  const select = document.createElement('select');
  select.text = usStates[i].name;
  select.value = usStates[i].abbreviation
  stateSelect.appendChild(select);
}


const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.textContent = 'Submit';

formSubmit.appendChild(submitButton);

submitButton.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(event.target.elements[0]);
  alert('form submitted');
});

document.addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(event);

  // const formObject = {
  //   name: 'Name',
  //   emailAddress: 'Email Address',
  //   address: 'Address',
  //   city: 'City',
  //   state: 'State',
  //   zipCode: 'Zip Code',
  //   first: 'Firt Time Adopter?',
  //   pickup: 'Pickup Location',
  // };
  //
  // for (let i = 0; i < event.target.elements.length - 1; i++) {
  //   console.log(event.target.elements[i].value);
  //   formObject[event.target.elements[i].id] = event.target.elements[i].value;
  // }
});
