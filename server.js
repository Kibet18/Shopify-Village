
// async function fetchProducts() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const products = await response.json();
//         return products;
//     } catch (error) {
//         console.error('Error fetching products:', error);
//         return [];
//     }
// }

// // Function to display products
// function displayProducts(products) {
//     const productList = document.getElementById("product-list");

//     products.forEach(product => {
//         const productDiv = document.createElement("div");
//         productDiv.classList.add("product");

//         const image = document.createElement("img");
//         image.src = product.image;
//         image.alt = product.title;

//         const title = document.createElement("h3");
//         title.textContent = product.title;

//         const price = document.createElement("p");
//         price.textContent = "Price: $" + product.price;

//         const description = document.createElement("p");
//         description.textContent = product.description;

//         const buyButton = document.createElement("button");
//         buyButton.textContent = "Buy";
//         buyButton.addEventListener("click", () => {
//             alert("You clicked Buy for: " + product.title);
//         });

//         productDiv.appendChild(image);
//         productDiv.appendChild(title);
//         productDiv.appendChild(price);
//         productDiv.appendChild(description);
//         productDiv.appendChild(buyButton);

//         productList.appendChild(productDiv);
//     });
// }

// // Fetch products and display them
// async function init() {
//     const products = await fetchProducts();
//     displayProducts(products);
// }

// // Initialize
// init();
const baseURL ="https://fakestoreapi.com/products"
const select=document.querySelector("#category-container")



function fetchAllProductsCategory(){
  fetch("{$baseURL}/categories")
      .then(res=>res.json())
      .then(json=>console.log(json))
}