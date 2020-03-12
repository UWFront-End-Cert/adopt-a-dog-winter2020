//adoptadog java blog-o-page
window.onload = function() {

const blogSection1 = document.getElementById('blogbox1');

const textArray = [
  {
    title: 'The Best Ways to Keep Your Puppy Travel-happy',
    paragraph: 'Pet Food pet supplies gimme five puppy cage food feathers food heel feathers running pet gate walk lazy dog Spike. Good Boy park lazy dog walk kibble Scooby snacks licks canary. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies.'
  },

  {
    title: 'How to Walk Mulitple Dogs',
    paragraph: 'Pet Food pet supplies gimme five puppy cage food feathers food heel feathers running pet gate walk lazy dog Spike. Good Boy park lazy dog walk kibble Scooby snacks licks canary. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies.'
  },

  {
    title: 'Be Your Pets Best Teacher, Best Friend',
    paragraph: 'Pet Food pet supplies gimme five puppy cage food feathers food heel feathers running pet gate walk lazy dog Spike. Good Boy park lazy dog walk kibble Scooby snacks licks canary. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies.'
  }
];

textArray.forEach(function(text) {
  const box1 = document.createElement('div');

  box1.setAttribute('class', 'box');
  box1.setAttribute('id', 'firstBox');
  box1.innerHTML += '<h1>' + text.title + '</h1>';
  box1.innerHTML += '<p>' + text.paragraph + '</p>'

  blogSection1.appendChild(box1);
})


const blogSection2 = document.getElementById('blogbox2');

const imageArray = [
  {
    image: 'images/blog-1.jpg'
  },

  {
    image: 'images/blog-2.jpg'
  },

  {
    image: 'images/blog-3.jpg'
  }
];

imageArray.forEach(function(picture) {
  const box2 = document.createElement('div');
  box2.setAttribute('class', 'box2');
  box2.setAttribute('id', 'firstBox');
  box2.innerHTML += `<img src="${picture.image}">`

  blogSection2.appendChild(box2);
})

};











  /*const blogIntro = document.createElement('h1');
  blogIntro.textContent = 'Adoptadog DogaBlog';

  document.body.appendChild(blogIntro);

  const blogBody = document.getElementsByTagName('section')[0];
  console.log(blogBody);
 document.body.insertBefore(blogIntro, blogBody);




 const wrap = document.getElementById('blog-section');


const blogboxes1 = document.createElement('section');
wrap.appendChild(blogboxes1);
blogboxes1.setAttribute('class', 'blog-section');


 const blogImages1 = [
   {
     imageLink: 'images/blog-1.jpg'
   },
]

blogImages1.forEach(function(blogPix) {
const box2 =
document.createElement('div');
box2.innerHTML =  `<img src="${blogPix.imageLink}" alt= boy sits with his dog>`
blogboxes1.appendChild(box2);
});


const blogPosts1 = [
 {
   headline: 'The Best Ways to Keep Your Puppy Travel-happy',
  paragraph: 'lots of stuff to say about dogs. Oh, my gosh, so much stuff to say and the dogs make me want to bark and whine. Sometimes I will growl. So much stuff to say until I can not talk anymore.',
  },
]

blogPosts1.forEach(function(dogBlogz) {
  const box =
  document.createElement('div');
  box.innerHTML += '<h1>'+ dogBlogz.headline + '</h1>';
  box.innerHTML += '<p>' + dogBlogz.paragraph + '</p>'
  blogboxes1.appendChild(box);
});



const blogboxes1 = document.createElement('section');
wrap.appendChild(blogboxes1);
blogboxes1.setAttribute('class', 'blog-section');

const blogboxes1 = document.createElement('section');
wrap.appendChild(blogboxes1);
blogboxes1.setAttribute('class', 'blog-section');


 const blogImages = [
   {
     imageLink: 'images/blog-1.jpg'
   },
]

blogImages.forEach(function(blogPix) {
const box2 =
document.createElement('div');
box2.innerHTML =  `<img src="${blogPix.imageLink}" alt= boy sits with his dog>`
blogboxes1.appendChild(box2);
});


const blogPosts1 = [
 {
   headline: 'The Best Ways to Keep Your Puppy Travel-happy',
  paragraph: 'lots of stuff to say about dogs. Oh, my gosh, so much stuff to say and the dogs make me want to bark and whine. Sometimes I will growl. So much stuff to say until I can not talk anymore.',
  },
]

blogPosts1.forEach(function(dogBlogz) {
  const box =
  document.createElement('div');
  box.innerHTML += '<h1>'+ dogBlogz.headline + '</h1>';
  box.innerHTML += '<p>' + dogBlogz.paragraph + '</p>'
  blogboxes1.appendChild(box);
});


const blogboxes3 = document.createElement('section');
wrap.appendChild(blogboxes3);
blogboxes3.setAttribute('class', 'blog-section');


 const blogImages3 = [
   {
     imageLink: 'images/blog-3.jpg'
   },
]

blogImages3.forEach(function(blogPix) {
const box2 =
document.createElement('div');
box2.innerHTML =  `<img src="${blogPix.imageLink}" alt= boy sits with his dog>`
blogboxes3.appendChild(box2);
});


const blogPosts3 = [
 {
   headline: 'Be Your Pets Best Teacher, Best Friend',
  paragraph: 'lots of stuff to say about dogs. Oh, my gosh, so much stuff to say and the dogs make me want to bark and whine. Sometimes I will growl. So much stuff to say until I can not talk anymore.',
  },
]

blogPosts3.forEach(function(dogBlogz) {
  const box =
  document.createElement('div');
  box.innerHTML += '<h1>'+ dogBlogz.headline + '</h1>';
  box.innerHTML += '<p>' + dogBlogz.paragraph + '</p>'
  blogboxes3.appendChild(box);
});
*/






/* {
     imageLink: 'images/blog-2.jpg'
   },


   const blogboxes1 = document.createElement('section');
   wrap.appendChild(blogboxes1);
   blogboxes1.setAttribute('class', 'blog-section');


   {
     imageLink: 'images/blog-3.jpg'
   }*/



/*   {
     headline: 'How to Walk Mulitple Dogs',
    paragraph: 'lots of stuff to say about dogs. Oh, my gosh, so much stuff to say and the dogs make me want to bark and whine. Sometimes I will growl. So much stuff to say until I can not talk anymore.',
    },

    {
      headline: 'Be Your Pets Best Teacher, Best Friend',
     paragraph: 'lots of stuff to say about dogs. Oh, my gosh, so much stuff to say and the dogs make me want to bark and whine. Sometimes I will growl. So much stuff to say until I can not talk anymore.',
   }, */














/*
 const blogPosts = [
   {
     name: 'The Best Ways to Keep Your Puppy Travel-happy',
    paragraph: 'Pet Food pet supplies gimme five puppy cage food feathers food heel feathers running pet gate walk lazy dog Spike. Good Boy park lazy dog walk kibble Scooby snacks licks canary. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies.'
   },
     {
     name: 'How to Walk Mulitple Dogs',
     paragraph: 'Pet Food pet supplies gimme five puppy cage food feathers food heel feathers running pet gate walk lazy dog Spike. Good Boy park lazy dog walk kibble Scooby snacks licks canary. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies.'

   },

   {
     name: 'Be Your Pets Best Teacher, Best Friend',
     paragraph: 'Pet Food pet supplies gimme five puppy cage food feathers food heel feathers running pet gate walk lazy dog Spike. Good Boy park lazy dog walk kibble Scooby snacks licks canary. Roll Over kitty barky critters litter stick window litter box wagging field toy. Whiskers harness biscuit food lick small animals throw meow house train. Bedding field hamster small animals carrier polydactyl groom vaccine. Commands running gimme five groom slobber run fast head ball litter box biscuit catch run fast roll over. Roll Over litter box tabby pet slobbery play dead kitty roll over small animals barky good boy string kitty fish licks teeth chew drool. ID Tag barky lick parakeet wet nose ball walk tabby wag tail chirp nest. Spike bird seed water teeth leash ball. Crate pet food stripes carrier drool slobbery tabby dog puppy birds walk roll over bird food Mittens pet supplies.'
   }

 ];

 const wrap = document.getElementById(
 'blog-section');


 blogPosts.forEach(function(bloggy) {
   const box1 =
   document.createElement('div');
   box1.setAttribute('class', 'box1');
   box1.setAttribute('id', 'firstBox');
   box1.innerHTML += '<h1>'+ bloggy.name + '</h1>';
   box1.innerHTML += '<p>' + bloggy.paragraph + '</p>'

   wrap.appendChild(box1);
 })


 const blogImages = [
   {
       imageLink: 'images/blog-1.jpg'
   },
     {
        imageLink: 'images/blog-1.jpg'
   },
   {
        imageLink: 'images/blog-3.jpg'
   }
 ];

 const wraps = document.getElementById(
 'pic-section');

 blogImages.forEach(function(blogPics) {
   const box2 = document.createElement('div');
   box2.setAttribute('class', 'box2');
   box2.setAttribute('id', 'secondBox');
   box2.innerHTML = `<img src="blogPics.imageLink">`

   wraps.appendChild(box2);
 })
}
*/

/*

const blogPosts = [
{
      header: 'How to walk your dog'
    },
{
    paragraph: 'pargraph text'
  },
{
   image: 'imagelink'
 },
];

const wrap = document.getElementById(
'blog-target');

for(let i = 0; i < blogPosts.length; i++) {
  const blogBox = document. createElement('div');
     const blogHeader = document.createElement('h2');
    const blogParagraph = document.createElement('p');
    const blogImage = document.createElement('img');

    blogHeader.textContent = blogBox.blogHeader;
    blogParagraph.textContent = blogBox.blogParagraph;
    blogBox.innerHTML = '<img>'
  wrap.appendChild(blogBox);
}


};
};


*/
