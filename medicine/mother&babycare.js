
// ------------------ PRODUCT DATA ------------------
    // Replace image values with your real relative paths if you want.
    const ayurvedicProducts = [
  {
    name: "Mamaearth Gentle Cleansing Shampoo",
    image: "../images/mamaearth cleansing shampoo.jpg",
    desc: "for Babies",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Mum's Care Organic Baby Cereal Rice and Moong Dal",
    image: "../images/Mum's Care Organic Baby Cereal Rice and Moong Dal.jpg",
    desc: "",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 226, url: "#" }
    }
  },
  {
    name:"Nestle Nan Pro 2 Follow-Up Formula",
    image: "../images/Nestle Nan Pro 2 Follow-Up Formula.jpg",
    desc: "Stage 2 For 6-12 Months | 400g Pouch In Box",
    stores: {
      pharmeasy: { price: 486, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 525, url: "#" }
    }
  },
  {
    name: "Biovit Mom Whey Protein",
    image: "../images/Biovit Mom Whey Protein.jpg",
    desc: "For Baby's Brain, Eye & Nerve Health | Powder",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 312, url: "#" }
    }
  },
  {
    name:"Tedibar Bathing Bar",
    image: "../images/Tedibar Bathing Bar.jpg",
    desc: "75gm",
    stores: {
      pharmeasy: { price: 192, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Pharmeasy Multivitamin Gummies",
    image: "../images/Pharmeasy Multivitamin Gummies For Kids.jpg",
    desc: "For Kids And Adults Lemon & Strawberry Flavour Bottle Of 30 Gummies",
    stores: {
      pharmeasy: { price: 208, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Tedibar Spoo Gentle Baby Shampoo No Tears",
    image: "../images/Tedibar Spoo Gentle Baby Shampoo.jpg",
    desc: "Gentle On Scalp | No.1 Pediatrician Prescribed 125ml",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Prohance Mom Chocolate Nutrition Drink Jar",
    image: "../images/Prohance Mom Chocolate Nutrition Drink Jar Of 400 G.jpg",
    desc: "400 G",
    stores: {
      pharmeasy: { price: 472, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Himalaya Gentle Baby Powder",
    image: "../images/Himalaya Gentle Baby Powder.jpg",
    desc: "400 Gm",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Tedibar B4 Nappi Baby Rash Cream Tube",
    image: "../images/Tedibar B4 Nappi Baby Rash Cream Tube.jpg",
    desc: "75 G",
    stores: {
      pharmeasy: { price: 244, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Multivitamin Women",
    image: "../images/Pharmeasy Multivitamin Women.jpg",
    desc: "Overall Women Wellness - Builds Immunity - Bottle Of 60",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Aptamil Gold 1 Infant Formula Powder",
    image: "../images/Aptamil Gold 1 Infant Formula Powder.jpg",
    desc: "With Prebiotics (Upto 6 Months) Stage 1-400g Tin",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Dexolac Stage 1 Infant Formula",
    image: "../images/Dexolac Stage 1 Infant Formula.jpg",
    desc: "(Upto 6 Months) Box Of 400 G",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Himalaya Gentle Baby Lotion",
    image: "../images/Himalaya Gentle Baby Lotion.jpg",
    desc: "400 Ml",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },
  {
    name: "Rashfree Tube",
    image: "../images/Rashfree Tube.jpg",
    desc: "30gm Cream",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
    
  },
  {
    name: "Pro Pl Chocolate Powder",
    image: "../images/Pro Pl Chocolate Powder.jpg",
    desc: "500 Gm",
    stores: {
      pharmeasy: { price: 350, url: "#" },
      apollo: { price: 360, url: "#" },
      onemg: { price: 340, url: "#" }
    }
  },


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