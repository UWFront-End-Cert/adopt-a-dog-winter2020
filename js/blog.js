const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;

const blogPosts = [
    {
        imageSrc : 'images/blog-1.jpg',
        imageAlt: 'Picture of dog on a cliff',
        header: 'Traveling With Your Dog',
        text: lorem
    },
    {
        imageSrc : 'images/blog-2.jpg',
        imageAlt: 'Dogs on a walk',
        header: 'Multiple Dogs on being walked',
        text: lorem
    },
    {
        imageSrc : 'images/blog-3.jpg',
        imageAlt: 'Women playing fetch with a Dog',
        header: 'Teach Your Dog To Fetch',
        text: lorem
    }
];

window.onload = function() {
    //add h1 to document
    const target = document.getElementsByClassName('blog-container')[0];
    const mainHeaderToAdd = document.createElement('h1');
    target.appendChild(mainHeaderToAdd);
    const mainHeader = document.getElementsByTagName('h1')[0];
    mainHeader.textContent = 'Adoptadog Blog';

    blogPosts.forEach(function(post) {
        const section = document.createElement('section');
        section.className = 'blog-preview-container';
        section.innerHTML += `<img src ="${post.imageSrc}" alt = "${post.imageAlt}">`;
        section.innerHTML += `<h2>${post.header}</h2>`;

        //Two paragraphs per blog post
        for (let p = 0; p < 1; p++) {
            section.innerHTML += `<p>${post.text}</p>`;
        }

        target.appendChild(section);
    })
}
