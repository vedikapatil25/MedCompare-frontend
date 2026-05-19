const toggleBtn = document.getElementById("toggleMode");
const img1      = document.querySelector("#img1");
const img2      = document.querySelector("#img2");
const carousel  = document.querySelector(".carousel");
const nextBtn   = document.querySelector(".next-btn");
const prevBtn   = document.querySelector(".prev-btn");

const BASE_URL  = "http://localhost:8080";

// ── Dark/light toggle ─────────────────────────────────────────────────────────
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// ── Carousel image links ──────────────────────────────────────────────────────
img1.addEventListener("click", () => { window.location.href = "https://pharmeasy.in/health-care/14485"; });
img2.addEventListener("click", () => { window.location.href = "https://pharmeasy.in/health-care/16202"; });

// ── Carousel scroll ───────────────────────────────────────────────────────────
nextBtn.addEventListener("click", () => carousel.scrollBy({ left: 500, behavior: "smooth" }));
prevBtn.addEventListener("click", () => carousel.scrollBy({ left: -500, behavior: "smooth" }));

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
    onclick="handleAlertSubscribe(${item.id}, '${item.name}')">
    <i class="ti ti-bell" aria-hidden="true"></i>
    Alert me when price drops
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
renderPriceChart(sorted, lowestPrice, highestPrice); // ← add this  
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
document.addEventListener("DOMContentLoaded", () => {
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

  loadAllMedicines();
});
// ------------------ PRICE DROP ALERT ------------------
async function handleAlertSubscribe(medicineId, medicineName) {
  const token = localStorage.getItem("token");
  if (!token) {
    document.getElementById("alertStatus").textContent = "Please login to set alerts.";
    return;
  }

  const btn = document.getElementById("alertBtn");
  btn.disabled = true;
  btn.innerHTML = `<i class="ti ti-loader" aria-hidden="true"></i> Setting alert...`;

  try {
    const res = await fetch("http://localhost:8080/api/alerts/subscribe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({ medicineId })
    });

    const data = await res.json();

    if (res.ok) {
      btn.innerHTML = `<i class="ti ti-bell-check" aria-hidden="true"></i> Alert set!`;
      btn.style.background = "#1a5c32";
      btn.style.color = "#2ecc71";
      document.getElementById("alertStatus").textContent =
        `You'll get an email when ${medicineName} price drops.`;
    } else if (res.status === 409) {
      // Already subscribed
      btn.innerHTML = `<i class="ti ti-bell-off" aria-hidden="true"></i> Remove alert`;
      btn.disabled = false;
      btn.onclick = () => handleAlertUnsubscribe(medicineId);
      document.getElementById("alertStatus").textContent = "Already watching this medicine.";
    } else {
      throw new Error(data.message || "Failed");
    }
  } catch (err) {
    btn.disabled = false;
    btn.innerHTML = `<i class="ti ti-bell" aria-hidden="true"></i> Alert me when price drops`;
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
// ── FAQ Toggle ────────────────────────────────────────────────────────────────
function toggleFaq(btn) {
  const item = btn.closest(".faq-item");
  const isOpen = item.classList.contains("open");

  // close all open items first
  document.querySelectorAll(".faq-item.open").forEach(el => el.classList.remove("open"));

  // if it wasn't open, open it
  if (!isOpen) item.classList.add("open");
}

