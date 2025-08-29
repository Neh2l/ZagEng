const blogsContainer = document.getElementById("blogsContainer");
const articlesContainer = document.getElementById("articlesContainer");


const BLOGS_API = "https://test-api-v1-vert.vercel.app/v1/blogs";
const ARTICLES_API = "https://test-api-v1-vert.vercel.app/v1/articles";


async function loadBlogs() {
    try {
        const res = await fetch(BLOGS_API);
        if (!res.ok) throw new Error("Failed to fetch blogs");
        const blogs = await res.json();


        const selectedBlogs = blogs.slice(2, 4);

        blogsContainer.innerHTML = selectedBlogs.map(blog => `
            <div class="card">
                <img src="${blog.image}" alt="${blog.title}">
                <div class="card-content">
                    <h3>${blog.title}</h3>
                    <p>${blog.description}</p>
                </div>
            </div>
        `).join("");

    } catch (error) {
        console.error("Error fetching blogs:", error);
        blogsContainer.innerHTML = `<p> Failed to load blogs.</p>`;
    }
}


async function loadArticles() {
    try {
        const res = await fetch(ARTICLES_API);
        if (!res.ok) throw new Error("Failed to fetch articles");
        const articles = await res.json();

        articlesContainer.innerHTML = articles.map(article => `
            <div class="card">
                <img src="${article.image}" alt="${article.title}">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
            </div>
        `).join("");

    } catch (error) {
        console.error("Error fetching articles:", error);
        articlesContainer.innerHTML = `<p> Failed to load articles.</p>`;
    }
}

loadBlogs();
loadArticles();
