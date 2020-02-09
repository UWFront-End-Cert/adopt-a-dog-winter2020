//Link JavaScript to your site.
//Create click handlers on each dog’s button that will add to the total.
//Alert this total.

/*let total = 0;

function addToTotal () {
  total = Number((total + 123.45).toFixed(2));

}

*/

//html
/*
<div class="box" onclick="handleClick('Murphy')">
  <button onclick ="handleCounter(1)">click</button>
</div>

<div class="box" onclick="handleClick('Murphy')">
  <button onclick ="handleCounter(23)">click</button>
</div>

*/
//JS

let totalCost = 0;
let counter = 0;

function handleCounter(cost) {
  totalCost = Number(cost) + totalCost;
  counter++;
  alert(`You have selected ${counter} dog(s) to adopt. Your total price is $${totalCost}`);
}
