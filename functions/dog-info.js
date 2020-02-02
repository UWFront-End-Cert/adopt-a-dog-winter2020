/*
Create click handlers that alerts the dog’s information when clicking on the dog’s photo.
Pass in the params in the click handler of the dog’s name, breed and adoption fees
*/

function displayDogInfo(name, breed, adoptFee) {
    let result = null;
    result = `You clicked on ${name}. Here's some additional information:${`\n`}Breed: ${breed}${`\n`}Cost to adopt: ${adoptFee}`;
    alert(result);
}