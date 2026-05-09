
// ------------------ PRODUCT DATA ------------------
    // Replace image values with your real relative paths if you want.
    const products = [
  // {
  //   name: "Calcimax 500mg Strip",
  //   image: "../images/Calcimax 500mg Strip.jpg",
  //   desc: "30 Tablets",
  //   stores: {
  //     pharmeasy: { price: 269 , url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Cerave Hydrating Non-Foaming Daily Facial Cleanser",
  //   image: "../images/Cerave Hydrating Non-Foaming Daily Facial Cleanser.jpg",
  //   desc: "For Normal To Dry Skin - 88ml",
  //   stores: {
  //     pharmeasy: { price: 255, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 226, url: "#" }
  //   }
  // },
  // {
  //   name:"Episoft Ac Moisturizer",
  //   image: "../images/Episoft Ac Moisturizer.jpg",
  //   desc: "With Microencapsulated Suncreen | Spf 30 | 75 Gm",
  //   stores: {
  //     pharmeasy: { price: 474, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 525, url: "#" }
  //   }
  // },
  // {
  //   name: "Scalpe Plus Expert Anti-Dandruff Shampoo",
  //   image: "../images/Scalpe Plus Expert Anti-Dandruff Shampoo.jpg",
  //   desc: "With Ketoconazole | 75ml",
  //   stores: {
  //     pharmeasy: { price: 242, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 312, url: "#" }
  //   }
  // },
  // {
  //   name:"Bontress Pro+ Scalp Serum",
  //   image: "../images/Bontress Pro+ Scalp Serum.jpg",
  //   desc: "5% Capixyl | 3% Redensyl | 3% Anagain | 3% Procapil | 60 Ml ",
  //   stores: {
  //     pharmeasy: { price: 1080, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Everherb Aloe Vera Juice - Rejuvenates Skin & Hair",
  //   image: "../images/Everherb Aloe Vera Juice Rejuvenates Skin & Hair.jpg",
  //   desc: "With Pulp | 1 Litre Bottle",
  //   stores: {
  //     pharmeasy: { price: 145, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Venusia Max Intensive Moisturizing",
  //   image: "../images/Venusia Max Intensive Moisturizing.jpg",
  //   desc: "For All Skin Types | Lotion | 500 Gm",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Tetmosol Medicated Soap",
  //   image: "../images/Tetmosol Medicated Soap.jpg",
  //   desc: "For Relief From Skin Infections And Daily Bathing 100gm",
  //   stores: {
  //     pharmeasy: { price: 72, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Liveasy Wellness Anti Fungal Dusting Powder",
  //   image: "../images/Liveasy Wellness Anti Fungal Dusting Powder.jpg",
  //   desc: "100gm",
  //   stores: {
  //     pharmeasy: { price: 86, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Photostable Gold Matte Finish Spf 55 Sunscreen Gel",
  //   image: "../images/Photostable Gold Matte Finish Spf 55 Sunscreen Gel.jpg",
  //   desc: "50g",
  //   stores: {
  //     pharmeasy: { price: 718, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Vantej Extra Foaming With Refreshing Flavour Toothpaste",
  //   image: "../images/Vantej Extra Foaming With Refreshing Flavour Toothpaste.jpg",
  //   desc: "100gm",
  //   stores: {
  //     pharmeasy: { price: 304, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Revital Men Complete Multivitamin",
  //   image: "../images/Revital Men Complete Multivitamin.jpg",
  //   desc: "With Natural Ginseng | 60 Capsules",
  //   stores: {
  //     pharmeasy: { price: 560, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Senquel F Fast Relief & Enamel Protection Toothpaste",
  //   image: "../images/Senquel F Fast Relief & Enamel Protection Toothpaste.jpg",
  //   desc: "For Sensitive Teeth | Sugar Free 100 Gm",
  //   stores: {
  //     pharmeasy: { price: 190, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Triclenz Hair Cleanser",
  //   image: "../images/Triclenz Hair Cleanser.jpg",
  //   desc: "Bottle Of 250 Ml",
  //   stores: {
  //     pharmeasy: { price: 458, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Refresh Tears 0.5% Eye Drops",
  //   image: "../images/Refresh Tears 0.5% Eye Drops.jpg",
  //   desc: "Bottle Of 10ml",
  //   stores: {
  //     pharmeasy: { price: 106, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Liveasy Foods Healthy Roasted Seed Mix Roasted Seeds",
  //   image: "../images/Liveasy Foods Healthy Roasted Seed Mix.jpg",
  //   desc: "Blend Of 6 Fibre Rich Healthy Roasted Seeds - 200 Gms",
  //   stores: {
  //     pharmeasy: { price: 228, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },


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
     const token = localStorage.getItem("token");

      if (!token) {
        container.innerHTML = "Please login first";
        return;
      }
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
    })    
    .then(data => {

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
    card.dataset.index = index;

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


    // function buildRow(storeName, storeObj) {
    //   if (!storeObj) {
    //     return `<tr><td>${storeName}</td><td>N/A</td><td>-</td></tr>`;
    //   }
    //   return `
    //     <tr>
    //       <td>${storeName}</td>
    //       <td>₹${storeObj.price}</td>
    //       <td><a class="buy-btn" href="${storeObj.url}" target="_blank" rel="noopener">Buy</a></td>
    //     </tr>
    //   `;
    // }
      function buildRow(name, price, url , minPrice) {
      if (!price) {
      return ` <tr style="opacity:0.6">
        <td>${name}</td>
        <td>Not Available</td>
        <td>-</td>
      </tr>
      `;
      }
      // const buyLink = url 
      // ? `<a href="${url}" target="_blank" rel="noopener" class="buy-btn">Buy</a>`
      // : `<span style="color:gray">N/A</span>`;
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
        renderProducts(personal_care);
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
    loadProducts("personal_care");