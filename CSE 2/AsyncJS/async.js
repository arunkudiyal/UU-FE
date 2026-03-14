const addPost = ( post ) => {
    posts.push(post)
}

const posts = [
    {id: 1, postName: 'Post One', postDesc: 'Post One Desc'},
    {id: 2, postName: 'Post Two', postDesc: 'Post Two Desc'},
    {id: 3, postName: 'Post Three', postDesc: 'Post Three Desc'}
]

console.table(posts)

const newPost = {id: 4, postName: 'Post Four', postDesc: 'Post Four Desc'}
setTimeout( () => {
    addPost(newPost)
}, 500 )

console.table(posts)