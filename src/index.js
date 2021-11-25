fetch(/data/posts.json).then((response)=>{
    return response.jason()})
}).then((data)=>{
    createPosts(data)
})