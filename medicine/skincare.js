
// ------------------ PRODUCT DATA ------------------
    // Replace image values with your real relative paths if you want.
    const ayurvedicProducts = [
  {
    name: "Venusia Max Intensive Moisturizing",
    image: "../images/Venusia Max Intensive Moisturizing Lotion.jpg",
    desc: "For All Skin Types | Lotion | 500 Gm",
    stores: {
      pharmeasy: { price: 1145, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Ahaglow Advanced Tube Face Wash Gel",
    image: "../images/Ahaglow Advanced Tube Face Wash Gel.jpg",
    desc: "100 gm",
    stores: {
      pharmeasy: { price: 452, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 226, url: "#" }
    }
  },
  {
    name:"Brinton Uv Doux Silicone Sunscreen Gel",
    image: "../images/Brinton Uv Doux Sunscreen Gel.jpg",
    desc: "Spf 50 Tube Of 50gm",
    stores: {
      pharmeasy: { price: 623, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 525, url: "#" }
    }
  },
  {
    name: "Acne Uv Advanced Light Protection Sunscreen Gel",
    image: "../images/Acne Uv Advanced Light Protection Sunscreen Gel.jpg",
    desc: " Spf 50+ Pa++++ | 50 Gm",
    stores: {
      pharmeasy: { price: 750, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 312, url: "#" }
    }
  },
  {
    name:"Everherb  - Rejuvenates Skin & Hair",
    image: "../images/Everherb Aloe Vera Juice Rejuvenates Skin & Hair.jpg",
    desc: "Aloe Vera Juice With Pulp | 1 Litre Bottle ",
    stores: {
      pharmeasy: { price: 192, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Episoft Ac Moisturizer",
    image: "../images/Episoft Ac Moisturizer.jpg",
    desc: "With Microencapsulated Suncreen | Spf 30 | 75 Gm",
    stores: {
      pharmeasy: { price: 474, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Moiz Cleansing Lotion",
    image: "../images/Moiz Cleansing Lotion.jpg",
    desc: "Face & Body 400ml",
    stores: {
      pharmeasy: { price: 663, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Ahaglow S Bottle Foaming Face Wash",
    image: "../images/Ahaglow S Bottle Face Wash.jpg",
    desc: "100ml",
    stores: {
      pharmeasy: { price: 684, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Ekran Soft Spf 50 Plus Tube Of 50gm Silicone Sunscreen Gel",
    image: "../images/Ekran Soft Spf 50 Plus Tube Silicone Sunscreen Gel.jpg",
    desc: "50gm",
    stores: {
      pharmeasy: { price: 570, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Ethiglo Skin Whitening Face Wash 70gm",
    image: "../images/Ethiglo Skin Whitening Face Wash.jpg",
    desc: "70gm",
    stores: {
      pharmeasy: { price:223 , url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Venusia Moisturizing Cream",
    image: "../images/Venusia Moisturizing Cream.jpg",
    desc: "For Dry Sensitive Skin | Squat Jar | 100 Gm",
    stores: {
      pharmeasy: { price: 538, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Himalaya Purifying Neem",
    image: "../images/Himalaya Purifying Neem.jpg",
    desc: "Prevents Pimples | Face Wash | 150 Ml",
    stores: {
      pharmeasy: { price: 259, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Sebamed Clear Face Cleansing Foam - 150ml",
    image: "../images/Sebamed Clear Face Cleansing Foam.jpg",
    desc: "150ml",
    stores: {
      pharmeasy: { price: 571, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Everherb Neem - Immunity Booster - Hair & Skin Detoxifier",
    image: "../images/Everherb Neem - Immunity Booster - Hair & Skin Detoxifier.jpg",
    desc: "Bottle Of 60",
    stores: {
      pharmeasy: { price: 207, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Glogeous Advanced Bottle Of 100gm Face Wash Gel",
    image: "../images/Glogeous Advanced Face Wash Gel.jpg",
    desc: "Bottle Of 100gm",
    stores: {
      pharmeasy: { price: 1061, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
    
  },
  {
    name: "Saslic Ds Foaming Salicylic Acid Face Wash",
    image: "../images/Saslic Ds Foaming Salicylic Acid Face Wash.jpg",
    desc: "60ml",
    stores: {
      pharmeasy: { price: 396, url: "#" },
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
              <div class="product-card-price">From ₹${minPrice}</div>

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