
// ------------------ PRODUCT DATA ------------------
    // Replace image values with your real relative paths if you want.
    const products = [
  // {
  //   name: "Mamaearth Gentle Cleansing Shampoo",
  //   image: "../images/mamaearth cleansing shampoo.jpg",
  //   desc: "for Babies",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Mum's Care Organic Baby Cereal Rice and Moong Dal",
  //   image: "../images/Mum's Care Organic Baby Cereal Rice and Moong Dal.jpg",
  //   desc: "",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 226, url: "#" }
  //   }
  // },
  // {
  //   name:"Nestle Nan Pro 2 Follow-Up Formula",
  //   image: "../images/Nestle Nan Pro 2 Follow-Up Formula.jpg",
  //   desc: "Stage 2 For 6-12 Months | 400g Pouch In Box",
  //   stores: {
  //     pharmeasy: { price: 486, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 525, url: "#" }
  //   }
  // },
  // {
  //   name: "Biovit Mom Whey Protein",
  //   image: "../images/Biovit Mom Whey Protein.jpg",
  //   desc: "For Baby's Brain, Eye & Nerve Health | Powder",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 312, url: "#" }
  //   }
  // },
  // {
  //   name:"Tedibar Bathing Bar",
  //   image: "../images/Tedibar Bathing Bar.jpg",
  //   desc: "75gm",
  //   stores: {
  //     pharmeasy: { price: 192, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Pharmeasy Multivitamin Gummies",
  //   image: "../images/Pharmeasy Multivitamin Gummies For Kids.jpg",
  //   desc: "For Kids And Adults Lemon & Strawberry Flavour Bottle Of 30 Gummies",
  //   stores: {
  //     pharmeasy: { price: 208, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Tedibar Spoo Gentle Baby Shampoo No Tears",
  //   image: "../images/Tedibar Spoo Gentle Baby Shampoo.jpg",
  //   desc: "Gentle On Scalp | No.1 Pediatrician Prescribed 125ml",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Prohance Mom Chocolate Nutrition Drink Jar",
  //   image: "../images/Prohance Mom Chocolate Nutrition Drink Jar Of 400 G.jpg",
  //   desc: "400 G",
  //   stores: {
  //     pharmeasy: { price: 472, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Himalaya Gentle Baby Powder",
  //   image: "../images/Himalaya Gentle Baby Powder.jpg",
  //   desc: "400 Gm",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Tedibar B4 Nappi Baby Rash Cream Tube",
  //   image: "../images/Tedibar B4 Nappi Baby Rash Cream Tube.jpg",
  //   desc: "75 G",
  //   stores: {
  //     pharmeasy: { price: 244, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Multivitamin Women",
  //   image: "../images/Pharmeasy Multivitamin Women.jpg",
  //   desc: "Overall Women Wellness - Builds Immunity - Bottle Of 60",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Aptamil Gold 1 Infant Formula Powder",
  //   image: "../images/Aptamil Gold 1 Infant Formula Powder.jpg",
  //   desc: "With Prebiotics (Upto 6 Months) Stage 1-400g Tin",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Dexolac Stage 1 Infant Formula",
  //   image: "../images/Dexolac Stage 1 Infant Formula.jpg",
  //   desc: "(Upto 6 Months) Box Of 400 G",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Himalaya Gentle Baby Lotion",
  //   image: "../images/Himalaya Gentle Baby Lotion.jpg",
  //   desc: "400 Ml",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Rashfree Tube",
  //   image: "../images/Rashfree Tube.jpg",
  //   desc: "30gm Cream",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
    
  // },
  // {
  //   name: "Pro Pl Chocolate Powder",
  //   image: "../images/Pro Pl Chocolate Powder.jpg",
  //   desc: "500 Gm",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
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
      //  CHECK EMPTY DATA
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
      return `
      <tr style="opacity:0.6">
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
        renderProducts(mother_baby);
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
    loadProducts("mother_baby");
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