function handleClick(text) {
  alert(text);
}

let adoptFee = 123.45;

function dogTotal() {
  adoptFee = 123.45;
  alert('$' + adoptFee);
}

// const aside = document.querySelector('aside');
//
// const div = aside.querySelector('h2');
//
// const h2 = document.createElement('h2');
//
// h2.textContent = 'From Our Blog';
//
// aside.insertBefore (h2, div);
//

const blogArray = [
  // {
  //   header: 'From Our Blog',
  // },

  {
    image: 'images/blog-1.jpg',
    alt: 'Person hugging dog',
    title: 'Traveling with Your Dog',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    image: 'images/blog-2.jpg',
    alt: 'Group of dogs on leashes',
    title: 'How to Walk Multiple Dogs',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },

  {
    image: 'images/blog-3.jpg',
    alt: 'Silhouette of person throwing a ball',
    title: 'Teach Your Dog to Fetch!',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  }
];

const target = document.getElementById('columnTwo');

blogArray.forEach(function(entry) {
  const blog = document.createElement('div');
  // blog.innerHTML += '<h2>' + entry.header + '</h2>';
  blog.innerHTML += `<img src='${entry.image}'>`;
  // blog.setAttribute('src', entry.alt);
  blog.innerHTML += '<h3>' + entry.title + '</h3>';
  blog.innerHTML += '<p>' + entry.text + '</p>';

  target.appendChild(blog);
});

// const blogImage = document.createElement('img');
//
// blogImage.src = 'images/blog-1.jpg';
//
// aside.insertBefore(blogImage, div);
//
// const blogText = document.createElement('p');
//
// blogText.className = 'intro';
//
// blogText.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
//
// aside.insertBefore(blogText, div);



// const blogArray = [
//   {
//     Image: 'images/blog-1.jpg',
//     Title: 'Traveling with Your Dog',
//     Text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     Alt: 'Person hugging dog',
//   }
//   {
//     Image: 'images/blog-2.jpg',
//     Title: 'How to Walk Multiple Dogs',
//     Text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     Alt: 'Group of dogs on leash',
//   }
//   {
//     Image: 'images/blog-3.jpg',
//     Title: 'Teach your Dog to Fetch!',
//     Text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     Alt: 'Silhouette of person playing fetch with dog',
//   }
// ];
//
// const target = document.getElementById('blog-column');
//
// blogArray.forEach(function(blog) {
//   const assets = document.createElement('div');
//   blog.innerHTML += '<h3>' + blog.Title + '</h3>';
//   blog.innerHTML += `<img src="${blog.Image}">`;
//
//   target.appendChild(assets);
// })
//
