
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
    const productListEl = document.getElementById('productList');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modalBody');
    const closeModal = document.getElementById('closeModal');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const container = document.getElementById("productList");

    function loadProducts(category) {

    container.innerHTML = "<p style='text-align:center'>Loading...</p>";

    fetch(`http://localhost:8080/api/medicines/category/${category}`)
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

        card.dataset.index = index;

        // card.innerHTML = `
        //   <img src="${item.imageUrl || '../images/default.png'}" alt="${item.name}">          <h3>${item.name}</h3>
        //   <p>₹${item.price}</p>
        // `;
        card.innerHTML = `
          <img src="http://localhost:8080${item.imageUrl || '/images/default.png'}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
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
      <p>₹${item.price}</p>
    `;

    container.appendChild(card);
  });
  }

    

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
      const prices = [
      product.onemgPrice,
      product.apolloPrice,
      product.pharmeasyPrice
      ].filter(p => p != null);

      const minPrice = prices.length ? Math.min(...prices) : null;
      

      // Build modal HTML similar to screenshot #2
      modalBody.innerHTML = `
        <div class = "product-desc">
          <img src="http://localhost:8080${product.imageUrl ? product.imageUrl : '/images/default.png'}" alt = "${product.name}">          
          <h2 style="margin-top:0">${product.name}
            <span>${product.desc || ''}</span>
          </h2>
        </div>


        <div>
          <table class="store-table" aria-label="store prices">
            <thead>
              <tr><th>Store</th><th>Price</th><th>Link</th></tr>
            </thead>
            <tbody>
              ${buildRow("1mg", product.onemgPrice, product.onemgUrl , minPrice)}
              ${buildRow("Apollo", product.apolloPrice, product.apolloUrl, minPrice)}
              ${buildRow("Pharmeasy", product.pharmeasyPrice, product.pharmeasyUrl , minPrice)}
         
            </tbody>
          </table>
        </div>
      `;
      modal.style.display = 'flex';
      // scroll top inside modal content (in case)
      document.querySelector('.modal-content').scrollTop = 0;
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
      return `<tr><td>${name}</td><td>N/A</td><td>-</td></tr>`;
      }

      return `
      <tr>
        <td>${name}</td>
        <td style="${minPrice && price === minPrice ? 'color:green;font-weight:bold' : ''}">        ₹${price}</td>
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
    searchInput.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') doSearch();
    });

    function doSearch() {
      const q = searchInput.value.trim().toLowerCase();
      if (!q) {
        renderProducts(products);
        return;
      }
      const filtered = products.filter(p => p.name.toLowerCase().includes(q) || (p.desc || '').toLowerCase().includes(q));
      renderProducts(filtered);
    }

    // Helpful: initial focus on search
    searchInput.focus();
    loadProducts("personal_care");