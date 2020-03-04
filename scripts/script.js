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

const articles = ['article1', 'article2', 'article3'];

for (let i = 0; i < articles.length; i ++) {

  const blogContainer = document.getElementsByClassName('blog-main')[0];
  const createArticle = document.createElement('article');

  blogContainer.appendChild(createArticle).setAttribute('class', 'blog-post');
}


const getArticle1 = document.getElementsByClassName('blog-post')[0];
const image = document.createElement('img');
const paraDiv = document.createElement('div');

getArticle1.innerHTML = '<img class="blog-img" src="images/blog-1.jpg" alt="a person sitting with their arm around their dog looking out at a canyon">';
getArticle1.appendChild(paraDiv).setAttribute('class', 'blog-para');

const getBlogPara = document.getElementsByClassName('blog-para')[0];

getBlogPara.innerHTML += '<h3>Traveling With Your Dog</h3>';
getBlogPara.innerHTML += '<p class="blog-post-font">Doggo ipsum blop tungg woofer borkdrive tungg, doggorino stop it fren puggorino stop it fren h*ck, much ruin diet maximum borkdrive wow very biscit. Blep heckin angery woofer he made many woofs blep, smol borking doggo with a long snoot for pats doing me a frighten. Heck sub woofer dat tungg tho what a nice floof you are doing me a frighten fat boi, very good spot boofers aqua doggo.</p>';
getBlogPara.innerHTML += '<p class="blog-post-font"> Long doggo the neighborhood pupper most angery pupper I have ever seen ur givin me a spook pupperino, pats borkdrive yapper. Such treat stop it fren yapper long water shoob much ruin diet, pupper borkdrive. Wow very biscit pupperino doggorino fat boi I am bekom fat boof puggo I am bekom fat extremely cuuuuuute, borking doggo I am bekom fat boof doggo tungg heckin good boys.</p>';




// console logs form info

const getForm = document.getElementById('checkout-form');

getForm.addEventListner('submit', function(event) {

  event.preventDefault();

  for (let i = 0; i < event.target.elements.length - 1; i++) {
    console.log(event.target.elements[i].value);
  }
});
