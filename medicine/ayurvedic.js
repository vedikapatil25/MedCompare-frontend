
// ------------------ PRODUCT DATA ------------------
    // Replace image values with your real relative paths if you want.
    const products = [
  //    {
  //   name: "Organic India Ashwagandha Ayurvedic Veg Capsule",
  //   image: "../images/Organic India Ashwagandha Ayurvedic Veg Capsule.jpg",
  //   desc: "Relieves Stress & Builds Vitality",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Dabur Red Chyawanprash",
  //   image: "../images/chyawanprash.jpg",
  //   desc: "3X Immunity Action | Builds Strength, Stamina & Overall Health",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Jiva Triphala Tablet",
  //   image: "../images/Jiva Triphala Tablet.jpg",
  //   desc: "Eases Constipation & Supports Digestive Health",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Dabur Tulsi Drop for Immunity & Respiratory Health",
  //   image: "../images/Dabur Tulsi Drop for Immunity & Respiratory Health.jpg",
  //   desc: "Good for digestion",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: " Odomos Naturals Mosquito Repellant Spray",
  //   image: "../images/Odomos Naturals Mosquito Repellant Spray.jpg",
  //   desc: "Good for digestion",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: " Dabur Giloy Neem Tulsi Juice for Immunity",
  //   image: "../images/Dabur Giloy Neem Tulsi Juice for Immunity.jpg",
  //   desc: "Supports Respiratory, Skin & Liver Health",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: " Odomos Naturals Mosquito Repellant Spray",
  //   image: "../images/Odomos Naturals Mosquito Repellant Spray.jpg",
  //   desc: "Good for digestion",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Holyco Health Ashwagandha Tablet (180 Each)",
  //   image: "../images/Holyco Health Ashwagandha Tablet (180 Each).jpg",
  //   desc: "Good for digestion",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Dabur Sitopaladi Churna",
  //   image: "../images/Dabur Sitopaladi Churna.jpg",
  //   desc: "Relieves Cold & Allergies",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Holyco Health Ashwagandha Tablet (180 Each)",
  //   image: "../images/Holyco Health Ashwagandha Tablet (180 Each).jpg",
  //   desc: "",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Dabur Vrihat Vangeshwar Ras with Gold and Pearl",
  //   image: "../images/Dabur Vrihat Vangeshwar Ras with Gold and Pearl.jpg",
  //   desc: "",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Dabur Vatika Naturals Henna & Amla Shampoo",
  //   image: "../images/Dabur Vatika Naturals Henna & Amla Shampoo.jpg",
  //   desc: "",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Dabur Himalayan Apple Cider Vinegar",
  //   image: "../images/Dabur Himalayan Apple Cider Vinegar.jpg",
  //   desc: "With The Mother Of Vinegar |Raw, Unfiltered & 100% Natural",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Baidyanath Bhringrajasav",
  //   image: "../images/Baidyanath Bhringrajasav.jpg",
  //   desc: "Ayurvedic Hair Tonic for Hair Fall | Liver & Respiratory Health",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
  // },
  // {
  //   name: "Zandu Nityam Laxative Churna",
  //   image: "../images/Zandu Nityam Laxative Churna.jpg",
  //   desc: "Eases Constipation",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
  //     apollo: { price: 360, url: "#" },
  //     onemg: { price: 340, url: "#" }
  //   }
    
  // },
  // {
  //   name: "Gas-O-Fast Jeera Active Sachet",
  //   image: "../images/Gas-O-Fast Jeera Active Sachet.jpg",
  //   desc: "Helps Relieve Acidity",
  //   stores: {
  //     pharmeasy: { price: 350, url: "#" },
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
      const product = products[index];
      if (!product) return;

      const prices = [
      product.onemgPrice,
      product.apolloPrice,
      product.pharmeasyPrice
      ].filter(p => p != null);

      const minPrice = prices.length ? Math.min(...prices) : null;
      //console.log("Prices:", prices);
      //console.log("Min Price:", minPrice);
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
        <td style="${minPrice && price === minPrice ? 'color:white;background:green;padding:5px;border-radius:5px' : ''}">        <td><a href="${url}" target="_blank" class="buy-btn">Buy</a></td>
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
    loadProducts("ayurvedic");