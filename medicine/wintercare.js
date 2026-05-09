
// ------------------ PRODUCT DATA ------------------
    // Replace image values with your real relative paths if you want.
    const products = [
  // {
  //   name: "Cetaphil Moisturising Cream",
  //   image: "../images/Cetaphil Moisturising Cream.jpg",
  //   desc: "Dry To Normal Sensitive Skin | 80 Gm",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Venusia Max Intensive Moisturizing | For All Skin Types | Lotion | 500 Gm",
  //   image: "../images/Venusia Max Intensive Moisturizing.jpg",
  //   desc: "For All Skin Types | Lotion | 500 Gm",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 226, url: "#" }
  //   }
  // },
  // {
  //   name:"Supradyn Daily Multivitamin",
  //   image: "../images/Supradyn Daily Multivitamin.jpg",
  //   desc: "For Men & Women Builds Energy & Immunity Strip Of 15 Tablets",
  //   stores: {
  //     pharmeasy: { price: 486, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 525, url: "#" }
  //   }
  // },
  // {
  //   name: "Cetaphil Optimal Hydration Daily Cream 50 Gm",
  //   image: "../images/Cetaphil Optimal Hydration Cream.jpg",
  //   desc: "50 Gm",
  //   stores: {
  //     pharmeasy: { price: 1234, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 312, url: "#" }
  //   }
  // },
  // {
  //   name:"Morpheme Remedies Jamaican Castor Pure Oil",
  //   image: "../images/Tedibar Bathing Bar.jpg",
  //   desc: "200ml",
  //   stores: {
  //     pharmeasy: { price: 449, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Venusia Ureka Exfoliating & Anti Itch Moisturizing Cream",
  //   image: "../images/Venusia Ureka Exfoliating & Anti Itch Moisturizing Cream.jpg",
  //   desc: "100gm",
  //   stores: {
  //     pharmeasy: { price: 434, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Himalaya Pain Massage Oil",
  //   image: "../images/Himalaya Pain Massage Oil.jpg",
  //   desc: "100 Ml",
  //   stores: {
  //     pharmeasy: { price: 120, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Nivea Express Hydration Lotion",
  //   image: "../images/Nivea Express Hydration Lotion.jpg",
  //   desc: "400 ml",
  //   stores: {
  //     pharmeasy: { price: 451, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Vaseline Intensive Care Deep Moisture Body Lotion",
  //   image: "../images/Vaseline Intensive Care Deep Moisture Body Lotion - 600 Ml.jpg",
  //   desc: "600 Ml",
  //   stores: {
  //     pharmeasy: { price: 516, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Cofsils Ginger Lemon Lozenges 20*10",
  //   image: "../images/Cofsils Ginger Lemon Lozenges.jpg",
  //   desc: "",
  //   stores: {
  //     pharmeasy: { price: 30, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Vicks Babyrub Soothing Balm Comfort For Babies Bottle",
  //   image: "../images/Vicks Babyrub Soothing Balm.jpg",
  //   desc: "25ml",
  //   stores: {
  //     pharmeasy: { price: 160, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Flamingo Lumbar Sacro Belt Small",
  //   image: "../images/Flamingo Lumbar Sacro Belt.jpg",
  //   desc: "small",
  //   stores: {
  //     pharmeasy: { price: 770, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Refresh Jasmine Hair Oil",
  //   image: "../images/Dexolac Stage 1 Infant Formula.jpg",
  //   desc: "100ml Pack Of 4",
  //   stores: {
  //     pharmeasy: { price: 200, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Noni Herbal Capsules For Immunity",
  //   image: "../images/Noni Herbal Capsules For Immunity.jpg",
  //   desc: "Antioxidant | Immunity Booster For Men And Women (30 Capsules",
  //   stores: {
  //     pharmeasy: { price: 399, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Refresh Amla Hair Oil 100ml Pack Of 4",
  //   image: "../images/Refresh Amla Hair Oil.jpg",
  //   desc: "100ml Pack Of 4",
  //   stores: {
  //     pharmeasy: { price: 190, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
    
  // },
  // {
  //   name: "Natures Velvet Ashwagandha capsules",
  //   image: "../images/Natures Velvet Ashwagandha capsules.jpg",
  //   desc: "(Organic Ksm-66) Pure Extract 500 Mg | 60 Veggie Capsules",
  //   stores: {
  //     pharmeasy: { price: 720, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // }


      // ... add your other products here (keep stores object for compare)
 ];

    // ------------------ RENDER ------------------
    const BASE_URL = "http://localhost:8080";
    const productListEl = document.getElementById('productList');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.getElementById('closeModal');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const container = document.getElementById("productList");

    function makePlaceholder(name) {
    return `https://placehold.co/120x120?text=${encodeURIComponent(name.slice(0, 10))}`;
    }
    function loadProducts(category) {

      container.innerHTML = "<p style='text-align:center'>Loading...</p>";

      fetch(`http://localhost:8080/api/medicines/category/${category}`, {
      headers: {
      "Authorization": "Bearer " + localStorage.getItem("token")
      }
    }) 
    .then(res => {
    if (!res.ok) {
    throw new Error("Server error");
    }
    return res.json();
    })    .then(data => {

      products.length = 0;
      products.push(...data);
      container.innerHTML = "";
    // ✅ CHECK EMPTY DATA
      if (data.length === 0) {
        container.innerHTML = "<p style='text-align:center;color:gray'>No products found</p>";       return;
      }
      data.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("product-card");

        card.dataset.id = item.id;

        // card.innerHTML = `
        //   <img src="${item.imageUrl || '../images/default.png'}" alt="${item.name}">          <h3>${item.name}</h3>
        //   <p>₹${item.price}</p>
        // `;
        card.innerHTML = `
          <img src="http://localhost:8080${item.imageUrl || '/images/default.png'}" alt="${item.name}">
          <h3>${item.name}</h3>
        `;

      

        container.appendChild(card);

      });
    })
      .catch(err => {                    
      console.error("Error loading products:", err);
      container.innerHTML = "Failed to load products";
    });
    
}

function renderProducts(list) {
  container.innerHTML = "";

  list.forEach((item, index) => {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.dataset.id = item.id;

    card.innerHTML = `
      <img src="http://localhost:8080${item.imageUrl || '/images/default.png'}" alt="${item.name}">
      <h3>${item.name}</h3>
    `;

    container.appendChild(card);
  });
}

    // ------------------ EVENT DELEGATION ------------------
    // open modal when clicking product card OR Compare button
    // ------------------ EVENT DELEGATION ------------------
    // open modal when clicking product card OR Compare button
  productListEl.addEventListener('click', (ev) => {
  const card = ev.target.closest('.product-card');
  if (card) {
    const id = Number(card.dataset.id);
    const item = products.find(p => p.id == id);  // look up the object
    if (item) openModal(item);                    
  }
});
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


    function buildRow(name, price, url , minPrice) {
      if (!price) {
      return `
        <tr><td>${name}</td>
        <td>N/A</td>
        <td>-</td>
        </tr>
        `;
      }

      return `
      <tr>
        <td>${name}</td>
        <td style="${minPrice && price === minPrice ? 'color:white;background:green;padding:5px;border-radius:5px' : ''}">₹${price}</td>
        <td><a href="${url}" target="_blank" class="buy-btn">Buy</a></td>
      </tr>
     `;
    }

    // ------------------ CLOSE MODAL ------------------
    closeModal.addEventListener('click', () => modal.style.display = 'none');
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.style.display = 'none';
    });

    // ------------------ SEARCH ------------------
    searchBtn.addEventListener('click', doSearch);
    // searchInput.addEventListener('keyup', (e) => {
    //   if (e.key === 'Enter') doSearch();
    // });
    searchInput.addEventListener("input", doSearch);

    function doSearch() {
      const q = searchInput.value.trim().toLowerCase();
      if (!q) {
        renderProducts(winter_care);
        return;
      }
      const filtered = products.filter(p => 
      (p.name && p.name.toLowerCase().includes(q)) || (p.desc && p.desc.toLowerCase().includes(q))
      );

    // Show "No results"
    if (filtered.length === 0) {
      container.innerHTML = "<p style='text-align:center;color:gray'>No matching products</p>";
      return;
    }
    renderProducts(filtered);
    }

    // Helpful: initial focus on search
    searchInput.focus();
    loadProducts("winter_care");