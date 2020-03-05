// create a series of boxes, each box will have a headline
// create a series of boxes, each box will have a headline
const blogsArray = [
  {
    name: 'Adopt A Dog',
    text: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga.',

  },
  {
    name: 'Traveling With Your Dog',
    text: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga.',

  },
  {
    name: 'How to Walk Multiple Dogs',
    text: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga.',

  },
  {
    name: 'Teach Your Dog To Fetch',
    text: 'Iduciendisite quo magnatem iuntum quid quaest ea am, tenderumet adis dolenem quidustrum fuga.',
  },
  ];

const target = document.getElementById(
'container');


blogsArray.forEach(function(blogs) {
  const box = document.createElement('div');
  box.setAttribute('class', 'box');
  box.setAttribute('id', 'firstBox');
  box.innerHTML += '<h1>' + blogs.name + '</h1>';
  box.innerHTML += '<p>' + blogs.text + '</p>';

  target.appendChild(box);
})
