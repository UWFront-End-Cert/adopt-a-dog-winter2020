window.onload = function() {
  console.log('loaded');
}

const mainHeadline = document.createElement('h2');
mainHeadline.setAttribute('class', 'blog-h2');
mainHeadline.innerHTML = 'Adoptadog Blog';
const section = document.querySelector('section');
section.appendChild(mainHeadline);


let blogParts = [
  {
    imgSrc: 'images/blog-1.jpg',
    imgAlt: 'person sitting at the edge of a canyong with a dog, looking at the view',
    imgHeight: '220',
    articleTitle: 'Traveling With Your Dog',
    paragraphOne: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
    paragraphTwo: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
  },

  {
    imgSrc: 'images/blog-2.jpg',
    imgAlt: 'several dogs on a leash, waiting to follow their leader',
    imgHeight: '220',
    articleTitle: 'How To Walk Multiple Dogs',
    paragraphOne: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
    paragraphTwo: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
  },

  {
    imgSrc: 'images/blog-3.jpg',
    imgAlt: 'silhouette of a girl playing catch with her dog against the backdrop of a reddish-orange sky',
    imgHeight: '220',
    articleTitle: 'Teach Your Dog Fetch!',
    paragraphOne: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
    paragraphTwo: 'Uptiusd andesci qui nem aut vendion ectur? Debis que explaut laborenia que doluptur, con et labor abor sant poreperum dio quat que doluptatur aut voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam voluptassim quisciatquam ea ad qui con nes cus esere dolut hicto teni solutenis alit ulparume nonseca estorer spernam.'
  }
]

for (let i = 0; i < blogParts.length; i++) {

  const blogBodyDiv = document.createElement('div');
  blogBodyDiv.setAttribute('class', 'blog-body');
  section.appendChild(blogBodyDiv);

  const blogImage = document.createElement('img');
  blogImage.setAttribute('src', blogParts[i].imgSrc);
  blogImage.setAttribute('alt', blogParts[i].imgAlt);
  blogImage.setAttribute('height', blogParts[i].imgHeight);
  blogBodyDiv.appendChild(blogImage);

  const blogParagraphDiv = document.createElement('div');
  blogParagraphDiv.setAttribute('class', 'blog-paragraph');
  blogBodyDiv.appendChild(blogParagraphDiv);
  const blogHeadline = document.createElement('h3');
  blogHeadline.innerHTML = blogParts[i].articleTitle;
  blogParagraphDiv.appendChild(blogHeadline);
  const paragraphOne = document.createElement('p');
  paragraphOne.innerHTML = blogParts[i].paragraphOne;
  blogParagraphDiv.appendChild(paragraphOne);
  const paragraphTwo = document.createElement('p');
  paragraphTwo.innerHTML = blogParts[i].paragraphTwo;
  blogParagraphDiv.appendChild(paragraphTwo);
}
