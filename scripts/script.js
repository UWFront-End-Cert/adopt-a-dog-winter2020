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

// blog page content

const blogContainer = document.getElementById('blog-container');
const blogArr = [
  {
    imageLink: './images/blog-1.jpg',
    altTag: 'a person sitting with their arm around their dog looking out at a canyon',
    headline: 'Traveling With Your Dog',
    textOne: 'Doggo ipsum blop tungg woofer borkdrive tungg, doggorino stop it fren puggorino stop it fren h*ck, much ruin diet maximum borkdrive wow very biscit. Blep heckin angery woofer he made many woofs blep, smol borking doggo with a long snoot for pats doing me a frighten. Heck sub woofer dat tungg tho what a nice floof you are doing me a frighten fat boi, very good spot boofers aqua doggo.',
    textTwo: 'Long doggo the neighborhood pupper most angery pupper I have ever seen ur givin me a spook pupperino, pats borkdrive yapper. Such treat stop it fren yapper long water shoob much ruin diet, pupper borkdrive. Wow very biscit pupperino doggorino fat boi I am bekom fat boof puggo I am bekom fat extremely cuuuuuute, borking doggo I am bekom fat boof doggo tungg heckin good boys.'
  },
  {
    imageLink: './images/blog-2.jpg',
    altTag: 'four different dogs being walted by one person',
    headline: 'How To Walk Multiple Dogs',
    textOne: 'Doggo ipsum blop tungg woofer borkdrive tungg, doggorino stop it fren puggorino stop it fren h*ck, much ruin diet maximum borkdrive wow very biscit. Blep heckin angery woofer he made many woofs blep, smol borking doggo with a long snoot for pats doing me a frighten. Heck sub woofer dat tungg tho what a nice floof you are doing me a frighten fat boi, very good spot boofers aqua doggo.',
    textTwo: 'Long doggo the neighborhood pupper most angery pupper I have ever seen ur givin me a spook pupperino, pats borkdrive yapper. Such treat stop it fren yapper long water shoob much ruin diet, pupper borkdrive. Wow very biscit pupperino doggorino fat boi I am bekom fat boof puggo I am bekom fat extremely cuuuuuute, borking doggo I am bekom fat boof doggo tungg heckin good boys.'
  },
  {
    imageLink: './images/blog-3.jpg',
    altTag: 'a silhouette of a dog and a person who is holding up a ball',
    headline: 'Teach Your Dog To Fetch!',
    textOne: 'Doggo ipsum blop tungg woofer borkdrive tungg, doggorino stop it fren puggorino stop it fren h*ck, much ruin diet maximum borkdrive wow very biscit. Blep heckin angery woofer he made many woofs blep, smol borking doggo with a long snoot for pats doing me a frighten. Heck sub woofer dat tungg tho what a nice floof you are doing me a frighten fat boi, very good spot boofers aqua doggo.',
    textTwo: 'Long doggo the neighborhood pupper most angery pupper I have ever seen ur givin me a spook pupperino, pats borkdrive yapper. Such treat stop it fren yapper long water shoob much ruin diet, pupper borkdrive. Wow very biscit pupperino doggorino fat boi I am bekom fat boof puggo I am bekom fat extremely cuuuuuute, borking doggo I am bekom fat boof doggo tungg heckin good boys.'
  }
]

for (let i = 0; i < blogArr.length; i++) {

  const blogArticle = document.createElement('article');
  blogArticle.setAttribute('class', 'blog-post');

  const image = document.createElement('img');
  image.setAttribute('class', 'blog-img');
  image.setAttribute('src', blogArr[i].imageLink);
  image.setAttribute('alt', blogArr[i].altTag);
  blogArticle.appendChild(image);

  const paraDiv = document.createElement('div');
  paraDiv.setAttribute('class', 'blog-para');
  blogArticle.appendChild(paraDiv);

  const blogHeader = document.createElement('h3');
  blogHeader.innerText = blogArr[i].headline;
  paraDiv.appendChild(blogHeader);

  const blogParaOne = document.createElement('p');
  blogParaOne.innerText = blogArr[i].textOne;
  blogParaOne.setAttribute('class', 'blog-post-font');
  paraDiv.appendChild(blogParaOne);

  const blogParaTwo = document.createElement('p');
  blogParaTwo.innerText = blogArr[i].textTwo;
  blogParaTwo.setAttribute('class', 'blog-post-font');
  paraDiv.appendChild(blogParaTwo);

  blogContainer.appendChild(blogArticle);
}

// console logs form inputs

// const getForm = document.getElementById('checkout-form');

document.addEventListener('submit', function(event) {

  event.preventDefault();

  const formObject = {};

  for (let i = 0; i < event.target.elements.length - 1; i++) {

    console.log(event.target.elements[i].id);

    formObject[event.target.elements[i].id] = event.target.elements[i].value;
  }

  console.log(formObject);
});
