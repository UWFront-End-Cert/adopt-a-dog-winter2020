//click dog pictures - alerts dog info

function dogInfo(nameFees) {
  alert(nameFees);
}

// click adopt button - alerts total cost

let totalCost = 0;

function dogFees(num) {
  totalCost += num;
  alert('Total Fees: ' + '$' + totalCost / 100);
}

// alerts user form has been submitted

function submitForm() {
  alert('The form information has been received. There is no turning back now.');
}


// HELP! I'm just trying to add an article element to the div with the class name 'blog-main'. What am I missing?

const blogContainer = document.getElementsByClassName('blog-main');
const article = document.createElement('article');

blogContainer.appendChild(article);
