
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
      const product =products[index];
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
    loadProducts("winter_care");