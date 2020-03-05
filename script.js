function handleClick(text) {
  alert(text);
}

let adoptFee = 123.45;

function dogTotal() {
  adoptFee = 123.45;
  alert('$' + adoptFee);
}

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
