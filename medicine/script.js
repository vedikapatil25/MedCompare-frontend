const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const toggleBtn = document.getElementById("toggleMode");
const shopcategories = document.querySelector("#shop-categories");
const products = [
  {
    name: "Moisturizer",
    price: "₹299",
    category: "skincare",
    img: "https://via.placeholder.com/120"
  },
  {
    name: "Face Wash",
    price: "₹199",
    category: "skincare",
    img: "https://via.placeholder.com/120"
  },
  {
    name: "Sunscreen SPF 50",
    price: "₹449",
    category: "skincare",
    img: "https://via.placeholder.com/120"
  },
  {
    name: "Paracetamol 500mg",
    price: "₹25",
    category: "medicine",
    img: "https://via.placeholder.com/120"
  },
  {
    name: "Vitamin C Tablets",
    price: "₹199",
    category: "medicine",
    img: "https://via.placeholder.com/120"
  }
];
const container = document.getElementById("productContainer");
const categoryButtons = document.querySelectorAll(".cat-btn");


function loadProducts(category) {
  fetch(`http://localhost:8080/api/medicines/category/${category}`)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("productContainer");
      container.innerHTML = "";

      data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.innerHTML = `
          <img src="${item.imageUrl ? item.imageUrl : '../images/default.png'}">
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
        `;

        card.addEventListener("click", () => {
          alert(`You clicked ${item.name}`);
        });

        container.appendChild(card);
      });
    });
}

// Show products based on category
categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const selectedCategory = btn.dataset.category;
    displayProducts(selectedCategory);
  });
});

function displayProducts(category) {
  container.innerHTML = "";  // clear previous products

  const filtered = products.filter(p => p.category === category);

  filtered.forEach(item => {
    container.innerHTML += `
      <div class="product-card">
        <img src="${item.img}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.price}</p>
      </div>
    `;
  });
}


nextBtn.addEventListener("click", () => {
  shopcategories.scrollBy({ left: 500, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  shopcategories.scrollBy({ left: -500, behavior: "smooth" });
});

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
loadProducts("ayurvedic");