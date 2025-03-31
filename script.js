function postMessage() {
    let text = document.getElementById("postInput").value;
    if (text.trim() === "") return;

    let post = document.createElement("div");
    post.classList.add("post");
    post.innerHTML = `
        <div>
            <img src="profile.jpg" class="profile-pic">
            <strong>User</strong>
        </div>
        <p>${text}</p>
        <button class="like-btn" onclick="likePost(this)">
            <i class="fas fa-thumbs-up"></i> Like
        </button>
        <span class="likes">0</span> Likes
    `;

    document.getElementById("posts").prepend(post);
    document.getElementById("postInput").value = "";
}

function likePost(button) {
    let span = button.nextElementSibling;
    let likes = parseInt(span.innerText);
    span.innerText = likes + 1;
    button.classList.add("liked");
}
