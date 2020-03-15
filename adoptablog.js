//adoptadog java blog-o-page
window.onload = function() {

const blogArticle = document.getElementById('wrap');

const blogArray = [
  {
    title: 'The Best Ways to Keep Your Puppy Travel-happy',
    paragraph: 'Pet Food pet supplies gimme five puppy cage food feathers food heel feathers running pet gate walk lazy dog Spike. Good Boy park lazy dog walk kibble Scooby snacks licks canary. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies.',
   image: 'images/blog-1.jpg'
  },

  {
    title: 'How to Walk Mulitple Dogs',
    paragraph: 'Pet Food pet supplies gimme five puppy cage food feathers food heel feathers running pet gate walk lazy dog Spike. Good Boy park lazy dog walk kibble Scooby snacks licks canary. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies.',
   image: 'images/blog-2.jpg'
  },

  {
    title: 'Be Your Pets Best Teacher, Best Friend',
    paragraph: 'Pet Food pet supplies gimme five puppy cage food feathers food heel feathers running pet gate walk lazy dog Spike. Good Boy park lazy dog walk kibble Scooby snacks licks canary. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies.',
   image: 'images/blog-3.jpg'
  }
];


for(i = 0; i < blogArray.length; i ++) {
  const postBox = document.createElement('section')
  postBox.setAttribute('class', 'blogBox')
  blogArticle.appendChild(postBox)

  const pictureBox = blogArray[i];
  const box = document.createElement('div')
  box.setAttribute('class', 'pictures');
  box.innerHTML += `<img src="${pictureBox.image}">`
  postBox.appendChild(box);

  const textBox = blogArray[i];
  const box2 = document.createElement('div');
  box2.setAttribute('class', 'texts');
  box2.innerHTML += '<h1>' + textBox.title + '</h1>';
  box2.innerHTML += '<p>' + textBox.paragraph + '</p>'
  postBox.appendChild(box2);

}

}
