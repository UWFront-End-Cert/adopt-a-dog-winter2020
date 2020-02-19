/*
Create click handlers on each dog’s button that will add to the total.
Alert this total.
*/

let total = 0;

function addToTotal() {
    total = Number((total + 123.45).toFixed(2)); 
    //a running total of all the dogs somehow produce many decimal places...
    totalDisplay = total.toFixed(2); 
    alert(`Your total cost is: $${totalDisplay}`);
    return total;
}

/*
Create click handlers that alerts the dog’s information when clicking on the dog’s photo.
Pass in the params in the click handler of the dog’s name, breed and adoption fees
*/

function displayDogInfo(name, breed, adoptFee) {
    let result = null;
    result = `You clicked on ${name}. Here's some additional information:${`\n`}Breed: ${breed}${`\n`}Cost to adopt: ${adoptFee}`;
    alert(result);
}