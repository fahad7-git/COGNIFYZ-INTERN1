document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById("posts-container");

    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(response => response.json())
        .then(data => {
            data.forEach(post => {
                const postElement = document.createElement("div");
                postElement.classList.add("post");

                postElement.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                `;

                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            postsContainer.innerHTML = "<p>Failed to load posts.</p>";
            console.error("Error fetching posts:", error);
        });
});
