var total = 0;

var imageClicked = function(name, fee) {
  alert(name + ' for ' + fee);
}

var posts = [{
    image: "images/blog-1.jpg",
    title: "Traveling with your dog",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ",
    link: "#"
  },
  {
    image: "images/blog-2.jpg",
    title: "Something about dog",
    text: "Lorem ipsum dolor sit asdf asdfas amet, consecte dsf tur adipisicing elit, sed do eiusmod tempor ",
    link: "#"
  },
  {
    image: "images/blog-3.jpg",
    title: "Who loves their log?",
    text: "Loasdf sd fasd asdrem ipsum dolor asdfasd sit amet, cons asdfectetur adipisicing elit, sed do eiusmod tempor ",
    link: "#"
  },
  {
    image: "images/blog-1.jpg",
    title: "How to take care of your dog",
    text: "asd fasdfasdf asd fasd fasdLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ",
    link: "#"
  },
  {
    image: "images/blog-2.jpg",
    title: "How to choose right food for your dog",
    text: "Lasd fasdfasd fasdf asdfa sdfasdf lalksjdf asd asdfasldkf orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ",
    link: "#"
  },
]

const blogContainer = document.getElementById('blog');

posts.forEach(post => {
  const blog = document.createElement('div');
  blog.classList.add("blog-item");

  const image = document.createElement('img');
  image.src = post.image;
  image.setAttribute('height', '200px');

  const title = document.createElement('h4');
  title.textContent = post.title;

  const paragraph = document.createElement("p");
  paragraph.textContent = post.text;

  const link = document.createElement('a');
  link.href = post.link;
  link.textContent = "Read more";

  blog.appendChild(image);
  blog.appendChild(title);
  blog.appendChild(paragraph);
  blog.appendChild(link);
  blogContainer.appendChild(blog);
});

$('.dog-box').hover(
  function() {
    $(this).addClass('box-shadow')
  },
  function() {
    $(this).removeClass('box-shadow')
  }
)


$('.dog-box-detail button').click(function() {

  total = total + $(this).data('price');
  $('#checkout-icon').text('$' + (total));
})