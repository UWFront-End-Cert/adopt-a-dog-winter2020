const form = document.querySelector('form');
const submitButton = document.querySelector('button');
const data = {};

function message() {
  alert('Thank you. The form information has been received');

}


form.addEventListener('submit',function(event){
  event.preventDefault();
  for(let i = 0; i < event.target.elements.length - 1; i++) {
    data[event.target.elements[i].name] = event.target.elements[i].value;
  }
  console.log(data);
});
 /*
 function handleSubmit(event) {
   event.preventDefault();
   for(let i = 0; i < event.target.elements.length - 1; i++) {
     data[event.target.elements[i].name] = event.target.elements[i].value;
   }
   console.log(data);
 }

form.addEventListener('submit', handleSubmit(event));

form.addEventListener('submit',
                       function(event){
                         event.preventDefault();
                         console.log('hi');
                       });

 const handleFormSubmit = event => {
                         // Stop the form from submitting since we’re handling that with AJAX.
                         event.preventDefault();
                         console.log('hi');
                       };
form.addEventListener('submit', handleFormSubmit);
*/
