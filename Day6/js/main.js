
function des() {
    alert("Exploring the trends and technologies shaping the next decade of the web.");
}

let container = document.getElementById('container');

const fetchData = () => {
    fetch("https://test-api-v1-vert.vercel.app/v1/blogs")
        .then((response) => response.json())
        .then((result) => {
            console.log(result);


            const data = result.slice(0, 4);


            container.innerHTML = `
       
          ${data
                    .map(
                        (item) => `
                <div class="child">
                  <h3>${item.title}</h3>
                  <img src="${item.image}" alt="${item.title}" width="200" />
                  <p>${item.description}</p>
                  <button onclick="des()">Add to cart</button>
                </div>
              `
                    )
                    .join("")}
        
      `;


        })
        .catch((error) => console.error("Error fetching data:", error));
};

fetchData();
