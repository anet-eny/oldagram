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
        <img class="avatar post-avatar" src="${postContent.avatar}" alt="Post avatar">
        <p class="bold-text post-text">${postContent.name}</p>
        <p class="post-text">${postContent.location}</p>
        <img class="post-img" id="like-img${i}" src="${postContent.post}" alt="Picture of the artist">
        <div class="icon-container">
            <img class="icon" id="like-icon${i}" src="images/icon-heart.png" alt="Like icon">
            <img class="icon" src="images/icon-comment.png" alt="Comment icon">
            <img class="icon" src="images/icon-dm.png" alt="Dm icon">
        </div>
        <div class="likes-comment-container">
            <p class="bold-text post-text likes" id="likes${i}">${postContent.likes} likes</p>
            <p class="post-text"><span class="bold-text">${postContent.username}</span> ${postContent.comment}</p>
        </div>
    `
    postSectionEl.append(post)
}

for (let i = 0; i < posts.length; i++) {
    const likeIconEl = document.getElementById(`like-icon${i}`)
    const likeImgEl = document.getElementById(`like-img${i}`)
    const likesEl = document.getElementById(`likes${i}`)

    let likesID = posts[i]
    let likesCount = likesID.likes

    likeIconEl.addEventListener("click", function() {
        likesCount += 1
        posts[i].likes = likesCount
        likesEl.innerHTML = `${posts[i].likes} likes`
    })

    likeImgEl.addEventListener("dblclick", function() {
        likesCount += 1
        posts[i].likes = likesCount
        likesEl.innerHTML = `${posts[i].likes} likes`
    })
}