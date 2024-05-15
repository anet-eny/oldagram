const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postSectionEl = document.getElementById("post-section")

for (let i = 0; i < posts.length; i++) {
    let postContent = posts[i]
    let post = document.createElement("article")

    post.innerHTML = `
        <img class="avatar" src="${postContent.avatar}" alt="Post avatar">
        <p class="bold-text">${postContent.name}</p>
        <p class="text">${postContent.location}</p>
        <img class="post-picture" src="${postContent.post}" alt="Picture of the artist">
        <div class="icon-container">
            <img class="icon" src="images/icon-heart.png" alt="Like icon">
            <img class="icon" src="images/icon-comment.png" alt="Comment icon">
            <img class="icon" src="images/icon-dm.png" alt="Dm icon">
        </div>
        <p class="bold-text">${postContent.likes}</p>
        <p class="text"><span class="bold-text">${postContent.username}</span>${postContent.comment}</p>
    `

    postSectionEl.append(post)

}