
// ------------------ PRODUCT DATA ------------------
    // Replace image values with your real relative paths if you want.
    const products = [
  // {
  //   name: "Venusia Max Intensive Moisturizing",
  //   image: "../images/Venusia Max Intensive Moisturizing Lotion.jpg",
  //   desc: "For All Skin Types | Lotion | 500 Gm",
  //   stores: {
  //     pharmeasy: { price: 1145, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Ahaglow Advanced Tube Face Wash Gel",
  //   image: "../images/Ahaglow Advanced Tube Face Wash Gel.jpg",
  //   desc: "100 gm",
  //   stores: {
  //     pharmeasy: { price: 452, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 226, url: "#" }
  //   }
  // },
  // {
  //   name:"Brinton Uv Doux Silicone Sunscreen Gel",
  //   image: "../images/Brinton Uv Doux Sunscreen Gel.jpg",
  //   desc: "Spf 50 Tube Of 50gm",
  //   stores: {
  //     pharmeasy: { price: 623, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 525, url: "#" }
  //   }
  // },
  // {
  //   name: "Acne Uv Advanced Light Protection Sunscreen Gel",
  //   image: "../images/Acne Uv Advanced Light Protection Sunscreen Gel.jpg",
  //   desc: " Spf 50+ Pa++++ | 50 Gm",
  //   stores: {
  //     pharmeasy: { price: 750, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 312, url: "#" }
  //   }
  // },
  // {
  //   name:"Everherb  - Rejuvenates Skin & Hair",
  //   image: "../images/Everherb Aloe Vera Juice Rejuvenates Skin & Hair.jpg",
  //   desc: "Aloe Vera Juice With Pulp | 1 Litre Bottle ",
  //   stores: {
  //     pharmeasy: { price: 192, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Episoft Ac Moisturizer",
  //   image: "../images/Episoft Ac Moisturizer.jpg",
  //   desc: "With Microencapsulated Suncreen | Spf 30 | 75 Gm",
  //   stores: {
  //     pharmeasy: { price: 474, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Moiz Cleansing Lotion",
  //   image: "../images/Moiz Cleansing Lotion.jpg",
  //   desc: "Face & Body 400ml",
  //   stores: {
  //     pharmeasy: { price: 663, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Ahaglow S Bottle Foaming Face Wash",
  //   image: "../images/Ahaglow S Bottle Face Wash.jpg",
  //   desc: "100ml",
  //   stores: {
  //     pharmeasy: { price: 684, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Ekran Soft Spf 50 Plus Tube Of 50gm Silicone Sunscreen Gel",
  //   image: "../images/Ekran Soft Spf 50 Plus Tube Silicone Sunscreen Gel.jpg",
  //   desc: "50gm",
  //   stores: {
  //     pharmeasy: { price: 570, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Ethiglo Skin Whitening Face Wash 70gm",
  //   image: "../images/Ethiglo Skin Whitening Face Wash.jpg",
  //   desc: "70gm",
  //   stores: {
  //     pharmeasy: { price:223 , url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Venusia Moisturizing Cream",
  //   image: "../images/Venusia Moisturizing Cream.jpg",
  //   desc: "For Dry Sensitive Skin | Squat Jar | 100 Gm",
  //   stores: {
  //     pharmeasy: { price: 538, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Himalaya Purifying Neem",
  //   image: "../images/Himalaya Purifying Neem.jpg",
  //   desc: "Prevents Pimples | Face Wash | 150 Ml",
  //   stores: {
  //     pharmeasy: { price: 259, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Sebamed Clear Face Cleansing Foam - 150ml",
  //   image: "../images/Sebamed Clear Face Cleansing Foam.jpg",
  //   desc: "150ml",
  //   stores: {
  //     pharmeasy: { price: 571, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Everherb Neem - Immunity Booster - Hair & Skin Detoxifier",
  //   image: "../images/Everherb Neem - Immunity Booster - Hair & Skin Detoxifier.jpg",
  //   desc: "Bottle Of 60",
  //   stores: {
  //     pharmeasy: { price: 207, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Glogeous Advanced Bottle Of 100gm Face Wash Gel",
  //   image: "../images/Glogeous Advanced Face Wash Gel.jpg",
  //   desc: "Bottle Of 100gm",
  //   stores: {
  //     pharmeasy: { price: 1061, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
    
  // },
  // {
  //   name: "Saslic Ds Foaming Salicylic Acid Face Wash",
  //   image: "../images/Saslic Ds Foaming Salicylic Acid Face Wash.jpg",
  //   desc: "60ml",
  //   stores: {
  //     pharmeasy: { price: 396, url: "#" },
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
function timeAgo(dateStr) {
  if (!dateStr) return null;
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins  = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days  = Math.floor(diff / 86400000);
  if (mins  < 1)   return "just now";
  if (mins  < 60)  return `${mins} minute${mins > 1 ? "s" : ""} ago`;
  if (hours < 24)  return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  return `${days} day${days > 1 ? "s" : ""} ago`;
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
  const updatedAgo = timeAgo(item.priceUpdatedAt);

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
        ${updatedAgo ? `
<div class="mc-price-updated">
  <i class="ti ti-clock" aria-hidden="true"></i>
  Prices updated <strong>${updatedAgo}</strong>
</div>` : ""}
      </div>
    </div>
<div class="mc-store-list">
      ${rows}
    </div>

    <div id="mc-price-chart" style="
      background:#111e34;
      border-radius:10px;
      padding:14px 16px;
      margin-top:10px;
      border:1px solid #1e3050;
    "></div>
<div class="mc-alert-section">

<button 
    class="mc-alert-btn" 
    id="alertBtn"
    data-medicine-id="${item.id}"
    data-medicine-name="${item.name.replace(/"/g, '&quot;')}"
    data-lowest-price="${lowestPrice}">
    <i class="ti ti-bell"></i> Alert me when price drops
</button>
  <span id="alertStatus" style="font-size:13px; color: var(--color-text-secondary);"></span>
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
  // Attach alert button listener safely
document.getElementById("alertBtn").addEventListener("click", function() {
    const medicineId = Number(this.dataset.medicineId);
    const medicineName = this.dataset.medicineName;
    const lowestPrice = Number(this.dataset.lowestPrice);
    handleAlertSubscribe(medicineId, medicineName, lowestPrice);
});
  renderPriceChart(sorted, lowestPrice, highestPrice); 
}
function renderPriceChart(prices, lowestPrice, highestPrice) {
  const chartContainer = document.getElementById("mc-price-chart");
  if (!chartContainer) return;

  const range = highestPrice - lowestPrice || 1; // avoid divide by zero

  const bars = prices.map(p => {
    const isBest = p.price === lowestPrice;
    // Bar width: min 40%, scales up to 100% for highest price
    const fillPct = 40 + ((p.price - lowestPrice) / range) * 60;

    return `
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:9px;">
        <span style="font-size:12px;color:#8a9bba;width:85px;flex-shrink:0;text-align:right;">
          ${p.store}
        </span>
        <div style="flex:1;height:26px;background:#1a2c47;border-radius:5px;overflow:hidden;">
          <div style="
            width:${fillPct}%;
            height:100%;
            border-radius:5px;
            background:${isBest ? '#1a5c32' : '#1a3a5c'};
            display:flex;align-items:center;padding-left:10px;
            font-size:12px;font-weight:700;
            color:${isBest ? '#2ecc71' : '#4a90d9'};
            transition:width 0.5s ease;
          ">₹${p.price}</div>
        </div>
      </div>
    `;
  }).join("");

  chartContainer.innerHTML = `
    <p style="font-size:11px;color:#5a6e8a;text-transform:uppercase;letter-spacing:0.06em;margin:0 0 12px;font-weight:500;">
      Price comparison
    </p>
    ${bars}
  `;
}
    function buildRow(name, price, url , minPrice) {
      if (!price) {
      return `<tr style="opacity:0.6">
        <td>${name}</td>
        <td>Not Available</td>
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
        renderProducts(skin_care);
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
    loadProducts("skin_care");
    // ------------------ PRICE DROP ALERT ------------------
async function handleAlertSubscribe(medicineId, medicineName, lowestPrice) {
    const token = localStorage.getItem("token");
    if (!token) {
        document.getElementById("alertStatus").textContent = "Please login to set alerts.";
        return;
    }

    const btn = document.getElementById("alertBtn");
    btn.disabled = true;
    btn.innerHTML = `<i class="ti ti-loader"></i> Setting alert...`;

    try {
        const res = await fetch("http://localhost:8080/api/alerts/subscribe", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
            body: JSON.stringify({ 
                medicineId: medicineId,
                priceAtSubscribe: lowestPrice    // ✅ must be here
            })
        });

        const data = await res.json();

        if (res.ok) {
            btn.innerHTML = `<i class="ti ti-bell-check"></i> Alert set!`;
            btn.style.background = "#1a5c32";
            btn.style.color = "#2ecc71";
            document.getElementById("alertStatus").textContent =
                `You'll get an email when ${medicineName} price drops.`;
        } else if (res.status === 409) {
            btn.innerHTML = `<i class="ti ti-bell-off"></i> Remove alert`;
            btn.disabled = false;
            btn.onclick = () => handleAlertUnsubscribe(medicineId);
            document.getElementById("alertStatus").textContent = "Already watching this medicine.";
        } else {
            throw new Error(data.message || "Failed");
        }
    } catch (err) {
        btn.disabled = false;
        btn.innerHTML = `<i class="ti ti-bell"></i> Alert me when price drops`;
        document.getElementById("alertStatus").textContent = "Something went wrong. Try again.";
    }
}
async function handleAlertUnsubscribe(medicineId) {
  const token = localStorage.getItem("token");
  const btn = document.getElementById("alertBtn");
  btn.disabled = true;

  try {
    await fetch("http://localhost:8080/api/alerts/unsubscribe", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({ medicineId })
    });

    btn.innerHTML = `<i class="ti ti-bell" aria-hidden="true"></i> Alert me when price drops`;
    btn.disabled = false;
    btn.onclick = () => handleAlertSubscribe(medicineId);
    document.getElementById("alertStatus").textContent = "Alert removed.";
  } catch (err) {
    btn.disabled = false;
    document.getElementById("alertStatus").textContent = "Could not remove alert.";
  }
}