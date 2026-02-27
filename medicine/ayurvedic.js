
// ------------------ PRODUCT DATA ------------------
    // Replace image values with your real relative paths if you want.
    const ayurvedicProducts = [
     {
    name: "Organic India Ashwagandha Ayurvedic Veg Capsule",
    image: "../images/Organic India Ashwagandha Ayurvedic Veg Capsule.jpg",
    desc: "Relieves Stress & Builds Vitality",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Dabur Red Chyawanprash",
    image: "../images/chyawanprash.jpg",
    desc: "3X Immunity Action | Builds Strength, Stamina & Overall Health",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Jiva Triphala Tablet",
    image: "../images/Jiva Triphala Tablet.jpg",
    desc: "Eases Constipation & Supports Digestive Health",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Dabur Tulsi Drop for Immunity & Respiratory Health",
    image: "../images/Dabur Tulsi Drop for Immunity & Respiratory Health.jpg",
    desc: "Good for digestion",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: " Odomos Naturals Mosquito Repellant Spray",
    image: "../images/Odomos Naturals Mosquito Repellant Spray.jpg",
    desc: "Good for digestion",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: " Dabur Giloy Neem Tulsi Juice for Immunity",
    image: "../images/Dabur Giloy Neem Tulsi Juice for Immunity.jpg",
    desc: "Supports Respiratory, Skin & Liver Health",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: " Odomos Naturals Mosquito Repellant Spray",
    image: "../images/Odomos Naturals Mosquito Repellant Spray.jpg",
    desc: "Good for digestion",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Holyco Health Ashwagandha Tablet (180 Each)",
    image: "../images/Holyco Health Ashwagandha Tablet (180 Each).jpg",
    desc: "Good for digestion",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Dabur Sitopaladi Churna",
    image: "../images/Dabur Sitopaladi Churna.jpg",
    desc: "Relieves Cold & Allergies",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Holyco Health Ashwagandha Tablet (180 Each)",
    image: "../images/Holyco Health Ashwagandha Tablet (180 Each).jpg",
    desc: "",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Dabur Vrihat Vangeshwar Ras with Gold and Pearl",
    image: "../images/Dabur Vrihat Vangeshwar Ras with Gold and Pearl.jpg",
    desc: "",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Dabur Vatika Naturals Henna & Amla Shampoo",
    image: "../images/Dabur Vatika Naturals Henna & Amla Shampoo.jpg",
    desc: "",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Dabur Himalayan Apple Cider Vinegar",
    image: "../images/Dabur Himalayan Apple Cider Vinegar.jpg",
    desc: "With The Mother Of Vinegar |Raw, Unfiltered & 100% Natural",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Baidyanath Bhringrajasav",
    image: "../images/Baidyanath Bhringrajasav.jpg",
    desc: "Ayurvedic Hair Tonic for Hair Fall | Liver & Respiratory Health",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Zandu Nityam Laxative Churna",
    image: "../images/Zandu Nityam Laxative Churna.jpg",
    desc: "Eases Constipation",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
    
  },
  {
    name: "Gas-O-Fast Jeera Active Sachet",
    image: "../images/Gas-O-Fast Jeera Active Sachet.jpg",
    desc: "Helps Relieve Acidity",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  }


      // ... add your other products here (keep stores object for compare)
 ];

    // ------------------ RENDER ------------------
    const productListEl = document.getElementById('productList');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.getElementById('closeModal');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    function renderProducts(list) {
      productListEl.innerHTML = list.map((p, i) => {
        const minPrice = p.stores
          ? Math.min(
              p.stores.pharmeasy?.price ?? Infinity,
              p.stores.apollo?.price ?? Infinity,
              p.stores.onemg?.price ?? Infinity
            )
          : 'N/A';

        return `
          <div class="product-card" data-index="${i}">
            <div>
              <img src="${p.image}" alt="${p.name}">
              <h3>${p.name}</h3>
              <p>${p.desc || ''}</p>
            </div>

            <div>
              <div class="product-card-price">Compared across: 1mg | Apollo | PharmEasy
</div>

              <button class="compare-btn open-modal-btn" data-index="${i}">Compare Price</button>
            </div>
          </div>
        `;
      }).join('');
    }

    // initial
    renderProducts(ayurvedicProducts);

    // ------------------ EVENT DELEGATION ------------------
    // open modal when clicking product card OR Compare button
    productListEl.addEventListener('click', (ev) => {
      const btn = ev.target.closest('.open-modal-btn');
      const card = ev.target.closest('.product-card');

      if (btn) {
        const idx = Number(btn.dataset.index);
        openProductModal(idx);
        return;
      }
      // if user clicks card itself (not button)
      if (card) {
        const idx = Number(card.dataset.index);
        openProductModal(idx);
      }
    });

    // ------------------ OPEN MODAL ------------------
    function openProductModal(index) {
      const product = ayurvedicProducts[index];
      if (!product) return;

      // Build modal HTML similar to screenshot #2
      modalBody.innerHTML = `
        <div class = "product-desc">
          <img src="${product.image}" alt="${product.name}">
          <h2 style="margin-top:0">${product.name}
            <span>${product.desc}</span>
          </h2>
        </div>

        <div>
          <table class="store-table" aria-label="store prices">
            <thead>
              <tr><th>Store</th><th>Price</th><th>Link</th></tr>
            </thead>
            <tbody>
              ${buildRow('PharmEasy', product.stores?.pharmeasy)}
              ${buildRow('Apollo', product.stores?.apollo)}
              ${buildRow('1mg', product.stores?.onemg)}
            </tbody>
          </table>
        </div>
      `;

      modal.style.display = 'flex';
      // scroll top inside modal content (in case)
      document.querySelector('.modal-content').scrollTop = 0;
    }

    function buildRow(storeName, storeObj) {
      if (!storeObj) {
        return `<tr><td>${storeName}</td><td>N/A</td><td>-</td></tr>`;
      }
      return `
        <tr>
          <td>${storeName}</td>
          <td>₹${storeObj.price}</td>
          <td><a class="buy-btn" href="${storeObj.url}" target="_blank" rel="noopener">Buy</a></td>
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
    searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') doSearch();
    });

    function doSearch() {
      const q = searchInput.value.trim().toLowerCase();
      if (!q) {
        renderProducts(ayurvedicProducts);
        return;
      }
      const filtered = ayurvedicProducts.filter(p => p.name.toLowerCase().includes(q) || (p.desc || '').toLowerCase().includes(q));
      renderProducts(filtered);
    }

    // Helpful: initial focus on search
    searchInput.focus();