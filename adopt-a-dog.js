// create a series of boxes, each box will have a headline
const blogsArray = [
  {
    name: 'Traveling With Your Dog',
    text: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
    imageLink: 'https://placehold.co/600x400/EEE/31343C'
  },
    {
    name: 'How to Walk Multiple Dogs',
    text: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
    imageLink: 'https://placehold.co/600x400/EEE/31343C'
  },
  {
    name: 'Teach Your Dog To Fetch',
    text: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga. Faceaquae estioria derum recuptatur, cum volore, undipsa doloreium hillupta aut es ut alitatuscit ommossum haritatur arum qui officae videbiti corporeium faccull oribus es quidignis ipietus explam sus am aut amet ant fugiatum, utem non reptat.',
    imageLink: 'https://placehold.co/600x400/EEE/31343C'
  }
];

const target = document.getElementById(
'blogcontainer');


blogsArray.forEach(function(blogs) {
  const box = document.createElement('div');
  box.setAttribute('class', 'box');
  box.setAttribute('id', 'firstBox');
  box.innerHTML += '<h1>' + blogs.name + '</h1>';
  box.innerHTML += '<p>' + blogs.text + '</p>';

  target.appendChild(box);
})
