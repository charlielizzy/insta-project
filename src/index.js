fetch("../data/posts.json")
.then(response => {
    return response.json
})
.then(response=>{
    createPosts(data)
})

const createPosts = (posts) =>{
forEach((post)=>{
//create card in post
const card = document.createElement('div');
card.classList.add('card');
container.appendChild(card)
})
}