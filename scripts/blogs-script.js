window.onload=function info()
{
  const blogsContent = [
  [
    '<img src=images/blog-1.jpg> </img>',
     '<p class="blog-paragraph"><h2>Traveling With Your Dog</h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>'
  ],
  [
     '<img src=images/blog-2.jpg> </img>',
     '<p class="blog-paragraph"> <h2>How To Walk Multiple Dogs</h2>  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>'
  ],
  [
    '<img src=images/blog-3.jpg> </img>',
     '<p class="blog-paragraph"> <h2>Teach Your Dog To Fetch!</h2> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>'
  ]
];
var target ;
var imageBox;
var blogTextBox;
 target= document.getElementById('blogs-container');
  for( var i=0 ; i<blogsContent.length; i++ )
 {
    imageBox=document.createElement('div');
    imageBox.className="blog-left";
    blogTextBox=document.createElement('div');
    blogTextBox.className="blog-right";
    imageBox.innerHTML =blogsContent[i][0];
    blogTextBox.innerHTML =blogsContent[i][1];
   target.appendChild(imageBox);
   target.appendChild(blogTextBox);
    }

}
