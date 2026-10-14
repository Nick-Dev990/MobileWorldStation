const products = [
  { id: "iphone-17-pro", name: "iPhone 17 Pro", category: "phones", price: 1159.99, image: "images/iphone 17 Pro.jpg", badge: "Just landed", note: "A standout upgrade", description: "A premium iPhone pick with a bold design and a camera system made for capturing everyday moments." },
  { id: "iphone-air", name: "iPhone Air", category: "phones", price: 799.99, image: "images/iphone Air.jpg", badge: "New", note: "Light on its feet", description: "A sleek, lightweight iPhone for people who like their everyday essentials simple and refined." },
  { id: "iphone-17e", name: "iPhone 17e", category: "phones", price: 599.99, image: "images/iphone 17e.jpg", badge: "Everyday pick", note: "Smart everyday value", description: "A straightforward iPhone choice for staying connected, getting things done and enjoying your favourite apps." },
  { id: "iphone-17", name: "iPhone 17", category: "phones", price: 899.99, image: "images/iphone 17.jpg", badge: "Popular", note: "An easy all-rounder", description: "A versatile iPhone option that balances everyday performance with a polished, familiar experience." },
  { id: "iphone-16", name: "iPhone 16 & 16 Plus", category: "phones", price: 699.99, image: "images/iphone 16 & 16 plus.jpg", badge: "Good choice", note: "More screen, more choice", description: "Choose the iPhone 16 size that feels right for you and keep your everyday tech close at hand." },
  { id: "watch-series-11", name: "Apple Watch Series 11", category: "wearables", price: 369.99, badge: "New", image: "images/apple watch serie 11.jpg", note: "A little more in sync", description: "A wrist-worn everyday companion for keeping useful information and activity close by." },
  { id: "watch-series-3", name: "Apple Watch Series 3", category: "wearables", price: 89.99, badge: "Good value", image: "images/apple watch serie 3.jpg", note: "A classic companion", description: "A classic Apple Watch from the MobileWorldStation collection. Check compatibility and condition details before purchase." },
  { id: "power-adapter", name: "40W Dynamic Power Adapter", category: "accessories", price: 59.99, badge: "Everyday essential", image: "images/40W Dynamic power.jpg", note: "Keep your day moving", description: "A compact charging essential to keep in your everyday tech setup." },
  { id: "crossbody-strap", name: "Crossbody Strap", category: "accessories", price: 19.99, badge: "Small upgrade", image: "images/crossbody  Strap.jpg", note: "Hands-free, your way", description: "A practical strap accessory to keep your phone close while you get on with your day." },
  { id: "iphone-air-case", name: "iPhone Air Case with MagSafe", category: "accessories", price: 5.99, badge: "Easy add-on", image: "images/Iphone Air Case with MagSafe.png", note: "A little extra protection", description: "A simple case option for your iPhone Air. Please check device compatibility before ordering." },
  { id: "iphone-17e-case", name: "iPhone 17e Silicone Case", category: "accessories", price: 8.99, badge: "Easy add-on", image: "images/iphone 17e silicone case.png", note: "Made to feel just right", description: "A silicone case option for your iPhone 17e. Please check device compatibility before ordering." },
  { id: "iphone-17-pro-case", name: "iPhone 17 Pro Techwoven Case", category: "accessories", price: 10.99, badge: "Easy add-on", image: "images/iphone 17 pro tech woven.png", note: "Finish your setup", description: "A woven-style case option for your iPhone 17 Pro. Please check device compatibility before ordering." },
  { id: "galaxy-s26-ultra", name: "Samsung Galaxy S26 Ultra", category: "phones", price: 1299.99, badge: "Android flagship", image: "https://smartkoshk.com/cdn/shop/files/uk-galaxy-s26-ultra-s948-577114-sm-s948bzkgeub-550747263.png?v=1772052040&width=1920", note: "Big-screen power", description: "A flagship Galaxy phone in the MobileWorldStation demo collection." },
  { id: "galaxy-s26-plus", name: "Samsung Galaxy S26+", category: "phones", price: 1099.99, badge: "Just landed", image: "https://static.smartphone.nl/orca/products/28961/samsung-galaxy-s26-plus.png?w=1080", note: "Room to do more", description: "A large-screen Samsung Galaxy option in the MobileWorldStation demo collection." },
  { id: "galaxy-s26", name: "Samsung Galaxy S26", category: "phones", price: 899.99, badge: "Everyday pick", image: "https://ddfndelma2gpn.cloudfront.net/color/3428/s26_Cobalt_Violet_-_Card.webp", note: "Compact flagship feel", description: "A compact Samsung Galaxy option in the MobileWorldStation demo collection." },
  { id: "pixel-10-pro-xl", name: "Google Pixel 10 Pro XL", category: "phones", price: 1099.99, badge: "Google AI", image: "https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/GP10PX512M_google_pixel_10_pro_xl_512g_moonstone.jpg", note: "Big-screen Pixel", description: "A large-screen Google Pixel phone in the MobileWorldStation demo collection." },
  { id: "pixel-10-pro", name: "Google Pixel 10 Pro", category: "phones", price: 999.99, badge: "Popular", image: "https://hi-stores.ru/upload/iblock/77d/6qhe3r4rp46fnuadri2fm7by9lnflbhg.jpg", note: "A clever all-rounder", description: "A Google Pixel Pro option in the MobileWorldStation demo collection." },
  { id: "pixel-10", name: "Google Pixel 10", category: "phones", price: 799.99, badge: "Google Pixel", image: "https://multimedia.bbycastatic.ca/multimedia/products/500x500/193/19363/19363129.jpg", note: "Clean and considered", description: "A Google Pixel phone in the MobileWorldStation demo collection." },
  { id: "pixel-10a", name: "Google Pixel 10a", category: "phones", price: 549.99, badge: "Smart value", image: "https://multimedia.bbycastatic.ca/multimedia/products/1500x1500/196/19682/19682868.jpg", note: "Everyday Pixel", description: "A more affordable Google Pixel option in the MobileWorldStation demo collection." },
  { id: "oneplus-15", name: "OnePlus 15", category: "phones", price: 899.99, badge: "Fast favourite", image: "https://brownsdeals.com/cdn/shop/files/OnePlus_15_Infinity_Black_16GB_512GB_Global_Version_TRCSL_Approved_2048x.png?v=1773907699", note: "Built for busy days", description: "A OnePlus flagship phone in the MobileWorldStation demo collection." },
  { id: "oneplus-nord-5", name: "OnePlus Nord 5", category: "phones", price: 499.99, badge: "Great value", image: "https://www.oneplus.in/content/dam/oneplus/2025/product-station/nord-5/assets/images-highlight-sticker-1-7e907a.png.webp", note: "Everyday performance", description: "A OnePlus Nord phone in the MobileWorldStation demo collection." },
  { id: "xiaomi-17-ultra", name: "Xiaomi 17 Ultra", category: "phones", price: 1299.99, badge: "Camera favourite", image: "https://i05.appmifile.com/586_item_de/27/02/2026/55a55b69eec886542320beb00a160062.png?q=85&thumb=1", note: "Made to capture more", description: "A Xiaomi flagship phone in the MobileWorldStation demo collection." },
  { id: "xiaomi-17", name: "Xiaomi 17", category: "phones", price: 899.99, badge: "Just landed", image: "https://www.proshop.dk/Images/915x900/3446341_6beb9e550046.png", note: "A sleek daily driver", description: "A compact Xiaomi flagship option in the MobileWorldStation demo collection." },
  { id: "redmi-note-15-pro-plus", name: "Redmi Note 15 Pro+", category: "phones", price: 449.99, badge: "Smart value", image: "https://i02.appmifile.com/mi-com-product/fly-birds/redmi-note-15-pro-plus-5g/PC/b42ef6869e6974a2b5060b6c751792d7.png", note: "More for your money", description: "A Redmi Note phone in the MobileWorldStation demo collection." },
  { id: "galaxy-tab-s11", name: "Samsung Galaxy Tab S11", category: "tablets", price: 799.99, badge: "Big-screen pick", image: "https://media.4rgos.it/i/Argos/7749807_R_Z001A", note: "Room to think bigger", description: "A Samsung Galaxy tablet option for browsing, reading and everyday productivity." },
  { id: "galaxy-watch8", name: "Samsung Galaxy Watch8", category: "wearables", price: 329.99, badge: "On your wrist", image: "https://media-ik.croma.com/Croma%20Assets/Communication/Wearable%20Devices/Images/316902_0_x95vhf.png?tr=w-600", note: "A little more in sync", description: "A Samsung Galaxy wearable in the MobileWorldStation demo collection." },
  { id: "galaxy-buds4-pro", name: "Samsung Galaxy Buds4 Pro", category: "wearables", price: 229.99, badge: "Sound pick", image: "https://api.samsungmobilepress.com/file/F271772697A6E865C547B7DDC5ED5AEEF2134A2EF2D0B71F1345E227E71C39C7334DB74888D571648A87389BAD14E97C83CF39A79E2B91ECD732DAC28EA61A424849E6EB4E467E60D6E6A3ECD878C964DD07A2BFD5B540B23081F9F06969D1A128C65609F798A4EF2597FF8F4588D4A8E40324AF7F7D19EFDD06121AF7992D33", note: "Bring your soundtrack", description: "Samsung Galaxy earbuds in the MobileWorldStation demo collection." }
];

const currency = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" });

const grid = document.getElementById("product-grid");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const summary = document.getElementById("results-summary");
const emptyState = document.getElementById("empty-state");
const drawer = document.getElementById("cart-drawer");
const overlay = document.getElementById("overlay");
const toast = document.getElementById("toast");
const dialog = document.getElementById("product-dialog");
let activeCategory = "all";
let toastTimer;
let cart = loadCart();

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("mws-cart-v2") || "[]");
    return Array.isArray(saved) ? saved.filter((item) => products.some((product) => product.id === item.id) && Number.isInteger(item.quantity) && item.quantity > 0) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem("mws-cart-v2", JSON.stringify(cart));
}

function getVisibleProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesSearch = !query || `${product.name} ${product.category} ${product.note}`.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
  const sort = sortSelect.value;
  if (sort === "price-low") filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-high") filtered.sort((a, b) => b.price - a.price);
  if (sort === "name") filtered.sort((a, b) => a.name.localeCompare(b.name));
  return filtered;
}

function renderProducts() {
  const visible = getVisibleProducts();
  grid.innerHTML = visible.map((product) => `
    <article class="product-card">
      <div class="product-visual" role="button" tabindex="0" data-open-product="${product.id}" aria-label="View ${product.name} details">
        <span class="product-badge ${product.category === "wearables" ? "coral" : ""}">${product.badge}</span>
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <button class="quick-add" type="button" data-add-product="${product.id}" aria-label="Add ${product.name} to bag">+</button>
      </div>
      <div class="product-info"><p class="product-category">${product.category}</p><h3>${product.name}</h3><div class="product-price-row"><span class="product-price">${currency.format(product.price)}</span><span class="product-note">${product.note}</span></div></div>
    </article>`).join("");
  summary.textContent = `${visible.length} ${visible.length === 1 ? "item" : "items"} to explore`;
  emptyState.hidden = visible.length > 0;
  grid.hidden = visible.length === 0;
  renderCategoryCounts();
}

function renderCategoryCounts() {
  document.querySelectorAll("[data-count]").forEach((element) => {
    const category = element.dataset.count;
    const count = category === "all" ? products.length : products.filter((product) => product.category === category).length;
    element.textContent = `(${count})`;
  });
}

function addToCart(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  const existing = cart.find((item) => item.id === id);
  if (existing) existing.quantity += 1;
  else cart.push({ id, quantity: 1 });
  saveCart();
  renderCart();
  showToast(`${product.name} added to your bag`);
}

function changeQuantity(id, change) {
  const item = cart.find((entry) => entry.id === id);
  if (!item) return;
  item.quantity += change;
  if (item.quantity < 1) cart = cart.filter((entry) => entry.id !== id);
  saveCart();
  renderCart();
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  saveCart();
  renderCart();
}

function renderCart() {
  const itemsElement = document.getElementById("cart-items");
  const empty = cart.length === 0;
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, item) => sum + products.find((product) => product.id === item.id).price * item.quantity, 0);
  document.getElementById("cart-count").textContent = totalQuantity;
  document.getElementById("bag-item-count").textContent = `(${totalQuantity})`;
  document.getElementById("cart-total").textContent = currency.format(total);
  document.getElementById("cart-empty").hidden = !empty;
  document.getElementById("cart-footer").hidden = empty;
  itemsElement.hidden = empty;
  itemsElement.innerHTML = cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return `<article class="cart-line"><img src="${product.image}" alt="" /><div><h3>${product.name}</h3><p>${currency.format(product.price)}</p><div class="quantity-control"><button type="button" data-quantity="-1" data-id="${product.id}" aria-label="Remove one ${product.name}">−</button><span>${item.quantity}</span><button type="button" data-quantity="1" data-id="${product.id}" aria-label="Add one ${product.name}">+</button></div><button type="button" class="remove-item" data-remove="${product.id}">Remove</button></div><span class="line-total">${currency.format(product.price * item.quantity)}</span></article>`;
  }).join("");
}

function setDrawerOpen(open) {
  drawer.classList.toggle("is-open", open);
  drawer.setAttribute("aria-hidden", String(!open));
  overlay.hidden = !open;
  document.body.classList.toggle("drawer-open", open);
  if (open) drawer.querySelector("[data-close-drawer]").focus();
  else document.getElementById("cart-trigger").focus();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function showProduct(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  document.getElementById("dialog-image").src = product.image;
  document.getElementById("dialog-image").alt = product.name;
  document.getElementById("dialog-title").textContent = product.name;
  document.getElementById("dialog-category").textContent = product.category;
  document.getElementById("dialog-price").textContent = currency.format(product.price);
  document.getElementById("dialog-description").textContent = product.description;
  document.getElementById("dialog-add").dataset.addProduct = product.id;
  dialog.showModal();
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add-product]");
  if (addButton) {
    event.stopPropagation();
    addToCart(addButton.dataset.addProduct);
    return;
  }
  const productTarget = event.target.closest("[data-open-product]");
  if (productTarget) showProduct(productTarget.dataset.openProduct);
  const categoryTarget = event.target.closest("[data-category], [data-nav-category], [data-jump-category]");
  if (categoryTarget) {
    activeCategory = categoryTarget.dataset.category || categoryTarget.dataset.navCategory || categoryTarget.dataset.jumpCategory;
    document.querySelectorAll(".category-tab").forEach((tab) => {
      const isActive = tab.dataset.category === activeCategory;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-pressed", String(isActive));
    });
    renderProducts();
    document.getElementById("main-nav").classList.remove("is-open");
    document.getElementById("menu-toggle").setAttribute("aria-expanded", "false");
  }
  const quantityButton = event.target.closest("[data-quantity]");
  if (quantityButton) changeQuantity(quantityButton.dataset.id, Number(quantityButton.dataset.quantity));
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) removeFromCart(removeButton.dataset.remove);
  if (event.target.closest("[data-close-drawer]")) setDrawerOpen(false);
});

document.querySelectorAll(".product-visual").forEach((element) => element.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    showProduct(element.dataset.openProduct);
  }
}));

document.querySelectorAll(".category-tab").forEach((tab) => tab.setAttribute("aria-pressed", String(tab.classList.contains("is-active"))));
searchInput.addEventListener("input", renderProducts);
const searchBox = document.getElementById("search-box");
const searchToggle = document.getElementById("search-toggle");
searchToggle.addEventListener("click", () => {
  const canCollapse = window.matchMedia("(max-width: 720px)").matches;
  const open = canCollapse ? !searchBox.classList.contains("is-active") : true;
  searchBox.classList.toggle("is-active", open);
  searchToggle.setAttribute("aria-expanded", String(open));
  searchToggle.setAttribute("aria-label", open ? "Close search" : "Open search");
  if (open) searchInput.focus();
  else searchInput.blur();
});
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    searchBox.classList.remove("is-active");
    searchToggle.setAttribute("aria-expanded", "false");
    searchToggle.setAttribute("aria-label", "Open search");
    searchInput.blur();
  }
});
sortSelect.addEventListener("change", renderProducts);
document.getElementById("reset-search").addEventListener("click", () => {
  searchInput.value = "";
  activeCategory = "all";
  document.querySelectorAll(".category-tab").forEach((tab) => {
    const isActive = tab.dataset.category === "all";
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-pressed", String(isActive));
  });
  renderProducts();
});
document.getElementById("cart-trigger").addEventListener("click", () => setDrawerOpen(true));
document.getElementById("checkout-button").addEventListener("click", () => showToast("Demo shop — checkout is not connected yet"));
overlay.addEventListener("click", () => setDrawerOpen(false));
dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
document.getElementById("menu-toggle").addEventListener("click", (event) => {
  const button = event.currentTarget;
  const open = button.getAttribute("aria-expanded") !== "true";
  button.setAttribute("aria-expanded", String(open));
  document.getElementById("main-nav").classList.toggle("is-open", open);
});
document.getElementById("current-year").textContent = new Date().getFullYear();
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchBox.classList.add("is-active");
    searchToggle.setAttribute("aria-expanded", "true");
    searchToggle.setAttribute("aria-label", "Close search");
    searchInput.focus();
  }
  if (event.key === "Escape" && drawer.classList.contains("is-open")) setDrawerOpen(false);
});

renderProducts();
renderCart();
