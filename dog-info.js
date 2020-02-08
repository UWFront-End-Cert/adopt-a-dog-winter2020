
//Create click handlers that alerts the dog’s information when clicking on the dog’s photo.
//You will need to pass in the params in the click handler of the dog’s name, breed and adoption fees.
/*
function displayDogInfo(name, breed, adoptFee) {
  let result = null;
  result = `You clicked on ${name}. Here's some information: ${breed}${`/n`}Cost to Adopt: ${adoptFee}`;
  alert(result);
}
*/
//JS

function handleClick(dogName, breed, adoptFee) {
  let result = null;
  result = `You clicked on ${dogName}. They are a ${breed} and cost $${adoptFee}`;
  alert(result);
}



//HTML
/*
<div class="box" onclick="handleClick('Murphy')">1</div>
<div class="box" onclick="handleClick('Fido')">1</div>
<div class="box" onclick="handleClick('Bullet')">1</div>
*/
