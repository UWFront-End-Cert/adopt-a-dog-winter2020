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
