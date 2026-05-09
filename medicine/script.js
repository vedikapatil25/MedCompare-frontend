const toggleBtn = document.getElementById("toggleMode");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const shopcategories = document.querySelector("#shop-categories");
const BASE_URL  = "http://localhost:8080";

// const products = [
//   {
//     name: "Moisturizer",
//     price: "₹299",
//     category: "skincare",
//     img: "https://via.placeholder.com/120"
//   },
//   {
//     name: "Face Wash",
//     price: "₹199",
//     category: "skincare",
//     img: "https://via.placeholder.com/120"
//   },
//   {
//     name: "Sunscreen SPF 50",
//     price: "₹449",
//     category: "skincare",
//     img: "https://via.placeholder.com/120"
//   },
//   {
//     name: "Paracetamol 500mg",
//     price: "₹25",
//     category: "medicine",
//     img: "https://via.placeholder.com/120"
//   },
//   {
//     name: "Vitamin C Tablets",
//     price: "₹199",
//     category: "medicine",
//     img: "https://via.placeholder.com/120"
//   }
// ];
const container = document.getElementById("productContainer");
const categoryButtons = document.querySelectorAll(".cat-btn");




// // ── Carousel scroll ───────────────────────────────────────────────────────────
// nextBtn.addEventListener("click", () => carousel.scrollBy({ left: 500, behavior: "smooth" }));
// prevBtn.addEventListener("click", () => carousel.scrollBy({ left: -500, behavior: "smooth" }));

// ── Placeholder image (inline SVG – no external service needed) ───────────────
function makePlaceholder(name) {
  const label = name.length > 18 ? name.slice(0, 16) + "…" : name;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="250" height="180">
    <rect width="250" height="180" fill="#eef2ff"/>
    <text x="125" y="80"  text-anchor="middle" font-size="48" fill="#4361ee">💊</text>
    <text x="125" y="130" text-anchor="middle" font-size="12" fill="#4361ee" font-family="Arial,sans-serif">${label}</text>
  </svg>`;
  return "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svg)));
}

// ── Data store ────────────────────────────────────────────────────────────────
let allMedicines = [];

async function loadAllMedicines() {
  try {
    const res = await fetch(`${BASE_URL}/api/medicines`);
    if (!res.ok) throw new Error("Server error");
    const data = await res.json();
    allMedicines = data.data || data;
  } catch {
    // Fallback mock data – remove once your real API is populated
    allMedicines = [
      { name: "Paracetamol",            desc: "Common painkiller and fever reducer.",          onemgPrice: 12,  apolloPrice: 13,  pharmeasyPrice: 11,   imageUrl: null },
      { name: "Dolo 650",               desc: "Paracetamol 650mg tablet for fever relief.",    onemgPrice: 30,  apolloPrice: 28,  pharmeasyPrice: 27,   imageUrl: null },
      { name: "Azithromycin",           desc: "Antibiotic for bacterial infections.",           onemgPrice: 85,  apolloPrice: 90,  pharmeasyPrice: 82,   imageUrl: null },
      { name: "Amoxicillin",            desc: "Penicillin antibiotic for various infections.",  onemgPrice: 55,  apolloPrice: 58,  pharmeasyPrice: 52,   imageUrl: null },
      { name: "Ibuprofen",              desc: "Anti-inflammatory for pain and fever.",          onemgPrice: 22,  apolloPrice: 24,  pharmeasyPrice: 21,   imageUrl: null },
      { name: "Cetirizine",             desc: "Antihistamine for allergies and hay fever.",     onemgPrice: 18,  apolloPrice: 20,  pharmeasyPrice: 17,   imageUrl: null },
      { name: "Metformin",              desc: "Controls blood sugar in type 2 diabetes.",       onemgPrice: 40,  apolloPrice: 42,  pharmeasyPrice: 38,   imageUrl: null },
      { name: "Omeprazole",             desc: "Reduces stomach acid for acidity relief.",       onemgPrice: 60,  apolloPrice: 65,  pharmeasyPrice: 58,   imageUrl: null },
    ];
  }
}

// ── Render cards ──────────────────────────────────────────────────────────────
function displayMedicines(medicines) {
  const container = document.getElementById("medicineList");
  container.innerHTML = "";

  if (!medicines || medicines.length === 0) {
    container.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#aaa;padding:40px 0;">No medicines found. Try a different name.</p>`;
    return;
  }

  medicines.forEach(item => {
    const imgSrc = getImgSrc(item);

    const prices = [item.onemgPrice, item.apolloPrice, item.pharmeasyPrice]
      .filter(p => p != null && p !== "N/A");
    const minPrice = prices.length ? Math.min(...prices) : "N/A";

    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${imgSrc}" alt="${item.name}"
           onerror="this.onerror=null;this.src='${makePlaceholder(item.name)}'">
      <h3>${item.name}</h3>
      <div class="product-card-price">From ₹${minPrice}</div>
      <button class="card-compare-btn">Compare Prices</button>
    `;

    card.addEventListener("click", () => openModal(item));
    container.appendChild(card);
  });
}

// ── Resolve image URL ─────────────────────────────────────────────────────────
function getImgSrc(item) {
  return item.imageUrl
    ? `${BASE_URL}${item.imageUrl}`
    : makePlaceholder(item.name);
}

// ── Modal ─────────────────────────────────────────────────────────────────────
function openModal(item) {
  const allPrices = [
    { store: "1mg",       price: item.onemgPrice,     url: item.onemgUrl     || `https://www.1mg.com/search/all?name=${encodeURIComponent(item.name)}`                },
    { store: "Apollo",    price: item.apolloPrice,    url: item.apolloUrl    || `https://www.apollopharmacy.in/search-medicines/${encodeURIComponent(item.name)}`   },
    { store: "Pharmeasy", price: item.pharmeasyPrice, url: item.pharmeasyUrl || `https://pharmeasy.in/search/all?name=${encodeURIComponent(item.name)}`             },
  ].filter(p => p.price != null && p.price !== "N/A");

  if (!allPrices.length) return;

  const lowestPrice = Math.min(...allPrices.map(p => p.price));
  const highestPrice = Math.max(...allPrices.map(p => p.price));
  const savings = (highestPrice - lowestPrice).toFixed(2);
  const lowestStore = allPrices.find(p => p.price === lowestPrice);

  // Sort: best deal first
  const sorted = [...allPrices].sort((a, b) => a.price - b.price);

  const storeIcons = {
    "1mg":       "ti-pill",
    "Apollo":    "ti-heart-plus",
    "Pharmeasy": "ti-clipboard-heart",
  };

  const rows = sorted.map(p => {
    const isBest = p.price === lowestPrice;
    return `
      <div class="mc-store-row ${isBest ? "mc-store-row--best" : ""}">
        <div class="mc-store-info">
          <i class="ti ${storeIcons[p.store] || "ti-building-store"}" aria-hidden="true"></i>
          <span class="mc-store-name">${p.store}</span>
          ${isBest ? `<span class="mc-best-badge">Best deal</span>` : ""}
        </div>
        <span class="mc-store-price">₹${p.price}</span>
        <a href="${p.url}" target="_blank" class="mc-buy-btn ${isBest ? "mc-buy-btn--best" : ""}">
          Buy now <i class="ti ti-arrow-right" aria-hidden="true"></i>
        </a>
      </div>
    `;
  }).join("");

  const imgSrc = getImgSrc(item);
  const desc = (item.desc || item.description || "").slice(0, 160).trim();
  const shortDesc = desc.length === 160 ? desc + "…" : desc;

  document.getElementById("modalBody").innerHTML = `
    <div class="mc-modal-header">
      <div class="mc-modal-img-wrap">
        <img
          src="${imgSrc}"
          alt="${item.name}"
          onerror="this.onerror=null;this.src='${makePlaceholder(item.name)}'"
        >
      </div>
      <div class="mc-modal-title-block">
        <h2 class="mc-modal-title">${item.name}</h2>
        ${shortDesc ? `<p class="mc-modal-desc">${shortDesc}</p>` : ""}
        <div class="mc-price-range">
          <span class="mc-price-range-label">Price range</span>
          <span class="mc-price-range-value">₹${lowestPrice} – ₹${highestPrice}</span>
        </div>
      </div>
    </div>

    <div class="mc-store-list">
      ${rows}
    </div>

    ${savings > 0 ? `
    <div class="mc-savings-tip">
      <i class="ti ti-tag" aria-hidden="true"></i>
      You save <strong>₹${savings}</strong> buying on ${lowestStore.store} vs the highest price
    </div>` : ""}
  `;

  // Clear old lowestPriceTip (we replaced it inline)
  const tip = document.getElementById("lowestPriceTip");
  if (tip) tip.textContent = "";

  document.getElementById("modal").style.display = "flex";
} 
// ── Search & filter ───────────────────────────────────────────────────────────
function filterMedicines(query) {
  const section = document.querySelector(".popular");
  if (!query) {
    document.getElementById("medicineList").innerHTML = "";
    section.style.display = "none";
    return;
  }
  const results = allMedicines.filter(item =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );
  section.style.display = "block";
  displayMedicines(results);
}

// ── Boot ──────────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", async () => {
  const searchInput = document.getElementById("searchInput");
  const searchBtn   = document.getElementById("searchBtn");

  document.querySelector(".popular").style.display = "none";

  document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
  });
  document.getElementById("modal").addEventListener("click", e => {
    if (e.target === document.getElementById("modal"))
      document.getElementById("modal").style.display = "none";
  });
searchBtn.addEventListener("click",   () => filterMedicines(searchInput.value.trim()));
  searchInput.addEventListener("keydown", e => { if (e.key === "Enter") filterMedicines(searchInput.value.trim()); });
  searchInput.addEventListener("input",   () => filterMedicines(searchInput.value.trim()));

await loadAllMedicines();
console.log(allMedicines);
}); 


// function loadProducts(category) {
//   fetch(`http://localhost:8080/api/medicines/category/${category}`)
//     .then(res => res.json())
//     .then(data => {
//       const container = document.getElementById("productContainer");
//       container.innerHTML = "";

//       data.forEach(item => {
//         const card = document.createElement("div");
//         card.classList.add("product-card");

//         card.innerHTML = `
//           <img src="${item.imageUrl ? item.imageUrl : '../images/default.png'}">
//           <h3>${item.name}</h3>
//           <p>₹${item.price}</p>
//         `;

//         card.addEventListener("click", () => {
//           alert(`You clicked ${item.name}`);
//         });

//         container.appendChild(card);
//       });
//     });
// }

// // Show products based on category
// categoryButtons.forEach(btn => {
//   btn.addEventListener("click", () => {
//     const selectedCategory = btn.dataset.category;
//     displayProducts(selectedCategory);
//   });
// });

// function displayProducts(category) {
//   container.innerHTML = "";  // clear previous products

//   const filtered = products.filter(p => p.category === category);

//   filtered.forEach(item => {
//     container.innerHTML += `
//       <div class="product-card">
//         <img src="${item.img}" alt="${item.name}">
//         <h3>${item.name}</h3>
//         <p>${item.price}</p>
//       </div>
//     `;
//   });
// }


nextBtn.addEventListener("click", () => {
  shopcategories.scrollBy({ left: 500, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  shopcategories.scrollBy({ left: -500, behavior: "smooth" });
});

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
// loadProducts("ayurvedic");