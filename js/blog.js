const dogBlogPosts = [
  {
    imageSrc:'images/blog-1.jpg',
    imageAlt:'a human hugs a dog looking at the mountain view',
    titleToAdd:'Traveling With Your Dog',
    firstParagraph:'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
    secondParagraph:'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
  },
  {
    imageSrc:'images/blog-2.jpg',
    imageAlt:'a people walking four dogs',
    titleToAdd:'How To Walk Multiple Dogs',
    firstParagraph:'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
    secondParagraph:'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
  },
  {
    imageSrc:'images/blog-3.jpg',
    imageAlt:'a girl teaching her dog to fetch',
    titleToAdd:'Teach Your Dog To Fetch!',
    firstParagraph:'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
    secondParagraph:'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
  }
]

const pageTitle = document.createElement('h1');
pageTitle.innerHTML = 'Adoptadog Blog';
const mainRoot = document.querySelector('.blog-page');
mainRoot.appendChild(pageTitle);

for(let i = 0; i < dogBlogPosts.length; i++) {
  const tileContainer = document.createElement('section');
  tileContainer.setAttribute('class', 'blog-tiles');
  const imageToAdd = document.createElement('img');
  imageToAdd.setAttribute('src', dogBlogPosts[i].imageSrc);
  imageToAdd.setAttribute('alt', dogBlogPosts[i].imageAlt);
  const blogTextContainer = document.createElement('div');
  blogTextContainer.setAttribute('class', 'blog-tiles-text');
  const blogTitle = document.createElement('h2');
  blogTitle.innerHTML = dogBlogPosts[i].titleToAdd;
  const blogFirstParagraph = document.createElement('p');
  blogFirstParagraph.innerHTML = dogBlogPosts[i].firstParagraph;
  const blogSecondParagraph = document.createElement('p');
  blogSecondParagraph.innerHTML = dogBlogPosts[i].secondParagraph;
  blogTextContainer.appendChild(blogTitle);
  blogTextContainer.appendChild(blogFirstParagraph);
  blogTextContainer.appendChild(blogSecondParagraph);
  tileContainer.appendChild(imageToAdd);
  tileContainer.appendChild(blogTextContainer);


  mainRoot.appendChild(tileContainer);
}
