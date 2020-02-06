
//Create click handlers that alerts the dog’s information when clicking on the dog’s photo.
//You will need to pass in the params in the click handler of the dog’s name, breed and adoption fees.

function displayDogInfo(name, breed, adoptFee) {
  let result = null;
  result = `You clicked on ${name}. Here's some information: ${breed}${`/n`}Cost to Adopt: ${adoptFee}`;
  alert(result);
}
