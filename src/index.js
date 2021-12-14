const container = document.querySelector('#container');

fetch("../data/posts.json")
.then((response) => {
    console.log(response)
    return response.json();
})
.then((data) => {
    createPosts(data)
});

const createPosts = (posts) =>{
posts.forEach((post)=>{

//create card in post
const card = document.createElement('div');
card.classList.add('card');
container.appendChild(card);

//create image in card
const image = document.createElement('img');
image.classList.add('picture');
image.src = post.image_url;
card.appendChild(image);

//create content in card
const content = document.createElement('div');
content.classList.add('content');
card.appendChild(content);
console.log(content)

//create like icon in content
const likeIcon = document.createElement('i');
likeIcon.classList.add('far', 'fa-heart', 'fa-2x', 'like-button');
content.appendChild(likeIcon);

//create owner in content
const owner = document.createElement('h3');
owner.classList.add('owner');
owner.innerText = post.owner;
content.appendChild(owner);

//create description in content
const description = document.createElement('p');
description.classList.add('description');
description.innerText = post.description;
content.appendChild(description);


})
}