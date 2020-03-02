const loremIp = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;

const blogPosts = [
    {
        imageSrc : 'images/blog-1.jpg',
        imageAlt: 'Person and dog in the Grand Canyon',
        header: 'Traveling With Your Dog',
        text: loremIp
    },
    {
        imageSrc : 'images/blog-2.jpg',
        imageAlt: 'Dogs on a walk',
        header: 'How To Walk Multiple Dogs',
        text: loremIp
    },
    {
        imageSrc : 'images/blog-3.jpg',
        imageAlt: 'Dog playing fetch',
        header: 'Teach Your Dog To Fetch',
        text: loremIp
    }
];

window.onload = function() {
    //add h1 to document
    const mainHeaderToAdd = document.createElement('h1');
    const target = document.getElementsByClassName('main-content-container')[0];
    target.appendChild(mainHeaderToAdd);
    let mainHeader = document.getElementsByTagName('h1')[0];
    mainHeader.textContent = 'Adoptadog Blog';

    //loop creating and displaying content from blogPosts array
    for (let i = 0; i < blogPosts.length; i++) {
        let o = blogPosts[i];
        let sectionToAdd = document.createElement('section');
        target.appendChild(sectionToAdd);
        
        let newSection = document.getElementsByTagName('section')[i];
        newSection.className = 'blog-preview-container';
        
        let imgToAdd = document.createElement('img');
        newSection.appendChild(imgToAdd);
        let newImg = newSection.getElementsByTagName('img')[0];
        newImg.src = o['imageSrc'];
        newImg.alt = o['imageAlt'];
      
        let blogHeader = document.createElement('h2');
        newSection.appendChild(blogHeader);
        let newBlogHeader = newSection.getElementsByTagName('h2')[0];
        newBlogHeader.textContent = o['header'];
        
        //Two paragraphs per blog post
        for (let p = 0; p < 2; p++) {
            let paragToAdd = document.createElement('p');
            newSection.appendChild(paragToAdd);
            let newParag = newSection.getElementsByTagName('p')[p];
            newParag.textContent = o['text'];
        }
    }
}
