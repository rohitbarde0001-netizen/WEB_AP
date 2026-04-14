// mangos data
const mangos = [
  { id: 1, type: 'sale', variety: 'Alphonso', price: '150 Rs.', unit: '1 Doz Box', weight: '3.5kg', rating: '4.8', farm: 'Ratnagiri Premium Orchards', location: 'Ratnagiri, Maharashtra', img: 'assets/012.jpg', sweetness: '98%', fiber: 'None', desc: "The King of Mangos! Hand-picked from our premium orchards. Alphonso mangos are renowned for their rich, creamy, tender texture and delicate, non-fibrous pulp. Perfect for eating fresh.", certification: '100% Organic, Export Quality' },
  { id: 2, type: 'sale', variety: 'Kesar', price: '120 Rs.', unit: '10kg Box', weight: '10kg', rating: '4.8', farm: 'Gir Sunlight Farms', location: 'Gir, Gujarat', img: 'assets/carde1.jpeg', sweetness: '95%', fiber: 'Low', desc: "Known as the 'Queen of Mangos', Kesar is famous for its bright saffron-colored pulp and intensely sweet flavor. Sourced directly from the foothills of Gir.", certification: 'GI Tag Certified' },
  { id: 3, type: 'sale', variety: 'Dasheri', price: '130 Rs.', unit: '5kg Box', weight: '5kg', rating: '4.7', farm: 'Nawab Royal Fields', location: 'Malihabad, UP', img: 'assets/mango_card.png', sweetness: '92%', fiber: 'Low', desc: 'A long, green-skinned mango that turns yellow when ripe. Very sweet and aromatic, perfect for those who love a distinct, perfumed flavor. Grown organically.', certification: 'Pesticide Free' },
  { id: 4, type: 'sale', variety: 'Banganapalli', price: '140 Rs', unit: '5kg Box', weight: '5kg', rating: '4.6', farm: 'Deccan Gold Orchards', location: 'Andhra Pradesh', img: 'assets/slider2.png', sweetness: '88%', fiber: 'None', desc: "Also known as Safeda, this beautifully large, obliquely oval mango has thin golden-yellow skin and firm, meaty, fiberless flesh. It's the perfect table mango.", certification: 'Export Quality' },
  { id: 5, type: 'rent', variety: 'Langra Tree', price: '2280 Rs./ Season', unit: 'Full Tree Rental', weight: 'Yield ~100kg', rating: '4.8', farm: 'Varanasi Heritage', location: 'Varanasi, UP', img: 'assets/lush_mango_orchard_1774281849618.png', sweetness: '93%', fiber: 'None', desc: "Rent an entire Langra tree for the season! Enjoy the unique, strong aroma and incredibly sweet flesh of your own harvest. A true connoisseur's delight.", certification: 'Traditional Farm' },
  { id: 6, type: 'rent', variety: 'Totapuri Tree', price: '2500 Rs. / Season', unit: 'Full Tree Rental', weight: 'Yield ~150kg', rating: '4.5', farm: 'Southern Green Farms', location: 'Karnataka', img: 'assets/lush_mango_orchard_1774281849618.png', sweetness: '70% (Tangy)', fiber: 'Moderate', desc: 'Perfect for large families or commercial use. This tree produces plenty of tangy Totapuri mangos, ideal for pickles and juices.', certification: 'GAP Certified' },
  { id: 7, type: 'rent', variety: 'Neelum Tree', price: '2750 Rs. / Season', unit: 'Full Tree Rental', weight: 'Yield ~120kg', rating: '4.4', farm: 'Royal Deccan Orchards', location: 'Hyderabad, Telangana', img: 'assets/lush_mango_orchard_1774281849618.png', sweetness: '85%', fiber: 'Low', desc: 'A late-season beauty. Renting a Neelum tree ensures a steady supply of juicy, floral mangos throughout the harvest period.', certification: 'Organic Certified' },
  { id: 8, type: 'rent', variety: 'Himsagar Tree', price: '2550 Rs. / Season', unit: 'Full Tree Rental', weight: 'Yield ~80kg', rating: '4.9', farm: 'Hooghly Heritage', location: 'West Bengal', img: 'assets/lush_mango_orchard_1774281849618.png', sweetness: '97%', fiber: 'None', desc: 'The ultimate luxury. Rent a Himsagar tree and enjoy the most delicate, fibreless, and sweet mangos from the East.', certification: 'Heritage Selection' },
  { id: 9, type: 'sale', variety: 'Rajapuri Kachcha', price: '100 Rs.', unit: '5kg Box', weight: '5kg', rating: '4.5', farm: 'Konkan Valley Farms', location: 'Ratnagiri, Maharashtra', img: 'assets/mango_card.png', sweetness: '10% (Tangy/Sour)', fiber: 'Moderate', desc: 'Fresh, firm, and tangy! Rajapuri Kachcha mangos are harvested young and green — perfect for making authentic Indian raw mango pickle (aachar), refreshing aam panna, tangy chutneys, and traditional dal with kachcha aam. A summer kitchen essential!', certification: 'Farm Fresh, Pesticide Free' },
  { id: 10, type: 'sale', variety: 'Totapuri Kachcha', price: '110 Rs.', unit: '5kg Box', weight: '5kg', rating: '4.3', farm: 'Southern Green Farms', location: 'Karnataka', img: 'assets/mango_card.png', sweetness: '15% (Sour-Tangy)', fiber: 'Moderate', desc: 'The classic raw mango! Totapuri Kachcha is the go-to variety for South Indian cuisine — ideal for making mango rice, rasam, sambar, raw mango salad & kosambari. Its firm flesh holds shape beautifully in cooking. Also great for commercial pickle production.', certification: 'GAP Certified, Export Quality' }
];

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCDYgI48Sk-RcwDunwmejq7f3cun8B3j54",
  authDomain: "freshambo-f29f8.firebaseapp.com",
  projectId: "freshambo-f29f8",
  storageBucket: "freshambo-f29f8.firebasestorage.app",
  messagingSenderId: "111296037569",
  appId: "1:111296037569:web:cfa651c15eeac01c15ca40",
  measurementId: "G-SEMRSPD155"
};

// Init Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, addDoc, collection, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function saveToFirestore(collectionName, data) {
  try {
    await addDoc(collection(db, collectionName), { ...data, createdAt: serverTimestamp() });
  } catch (err) {
    console.warn('Firestore write failed:', err);
    throw err;
  }
}

const WHATSAPP = '919893616233';
function openWhatsApp(text) {
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank');
}

// ── Cart State ──────────────────────────────────────────────
let cart = [];
let cartOpen = false;

function parsePriceNum(p) {
  const m = String(p || '').replace(/,/g, '').match(/(\d+(\.\d+)?)/);
  return m ? Number(m[1]) : 0;
}
function addToCart(item) {
  const ex = cart.find(c => c.id === item.id);
  if (ex) ex.qty++;
  else cart.push({ ...item, qty: 1 });
  cartOpen = true;
  renderCart();
}
function updateQty(id, delta) {
  cart = cart.map(c => c.id === id ? { ...c, qty: c.qty + delta } : c).filter(c => c.qty > 0);
  renderCart();
}
function removeFromCart(id) { cart = cart.filter(c => c.id !== id); renderCart(); }
function clearCart() { cart = []; renderCart(); }
function totalItems() { return cart.reduce((s, c) => s + c.qty, 0); }
function subtotal() { return cart.reduce((s, c) => s + parsePriceNum(c.price) * c.qty, 0); }

function renderCart() {
  const pane = document.getElementById('cartPane');
  if (!pane) return;
  pane.classList.toggle('open', cartOpen);

  const countEl = document.getElementById('cartCount');
  if (countEl) countEl.textContent = totalItems();

  const content = document.getElementById('cartContent');
  if (!content) return;
  if (cart.length === 0) {
    content.innerHTML = '<div class="empty-cart-msg">Your cart is currently empty. Add some delicious mangos!</div>';
  } else {
    content.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.variety}" class="cart-img" onerror="this.onerror=null;this.src='assets/mango_card.png'">
        <div class="cart-item-details">
          <div class="cart-item-title">${item.variety} Mangos</div>
          <div class="cart-item-farm">${item.unit} • ${item.farm}</div>
          <div class="cart-item-bottom">
            <div class="cart-item-price">${item.price}</div>
            <div class="qty-controls">
              <button class="qty-btn" onclick="updateQty(${item.id},-1)">-</button>
              <div class="qty-val">${item.qty}</div>
              <button class="qty-btn" onclick="updateQty(${item.id},1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
          </div>
        </div>
      </div>`).join('');
  }
  const subEl = document.getElementById('cartSubtotal');
  if (subEl) subEl.textContent = subtotal();
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;
}

function openCartDrawer() { cartOpen = true; renderCart(); }
function closeCartDrawer() { cartOpen = false; renderCart(); }

// ── Mango Card Builder ──────────────────────────────────────
function mangoCardHTML(item) {
  const isKachcha = item.variety.toLowerCase().includes('kachcha');
  const badge = item.type === 'rent' ? 'Tree Rental' : isKachcha ? 'Kachcha' : 'Top Seller';
  const badgeClass = isKachcha ? 'card-badge card-badge-kachcha' : 'card-badge';
  return `
    <div class="card" onclick="goDetail(${item.id})" tabindex="0" onkeydown="if(event.key==='Enter')goDetail(${item.id})">
      <div class="card-img-wrapper">
        <div class="${badgeClass}">${badge}</div>
        <div class="card-fav" onclick="event.stopPropagation();favClick(this)">♡</div>
        <img src="${item.img}" alt="${item.variety}" class="card-img" onerror="this.onerror=null;this.src='assets/mango_card.png'">
      </div>
      <div class="card-body">
        <div class="card-price">${item.price}</div>
        <div class="card-title">${item.unit} • ${item.variety}</div>
        <div class="card-address">${item.farm}, ${item.location}</div>
      </div>
      <div class="card-footer" style="display: flex; justify-content: space-between; align-items: center;">
        <span>Freshambo Verified ${item.type === 'sale' ? 'Broker' : 'Orchard'}</span>
        <button class="btn-primary" onclick="event.stopPropagation();addToCart(mangos.find(m => m.id === ${item.id}))" style="padding: 6px 12px; font-size: 12px; border-radius: 4px;">Add to Cart</button>
      </div>
    </div>`;
}

function favClick(el) { el.style.color = '#ff5a5f'; el.textContent = '♥'; }

function goDetail(id) {
  window.location.href = `detail.html?id=${id}`;
}

// ── Navbar Builder ──────────────────────────────────────────
function buildNavbar(activePage) {
  return `
  <header class="navbar">
    <div class="nav-left">
      <nav class="nav-links" id="navLinks">
        <a href="index.html" ${activePage === 'home' ? 'class="active"' : ''}>Home</a>
        <a href="index.html#aboutSection" onclick="scrollSmooth('aboutSection')">About</a>
        <a href="index.html#salesGrid" onclick="scrollSmooth('salesGrid')">Buy Now</a>
        <a href="index.html#mapSection" onclick="scrollSmooth('mapSection')">Available Area</a>
        <a href="index.html#enquirySection" onclick="scrollSmooth('enquirySection')">Contact</a>
        <a href="team.html" ${activePage === 'team' ? 'class="active"' : ''}>Team</a>
        <a href="privacy.html" ${activePage === 'privacy' ? 'class="active"' : ''}>Privacy</a>
        <a href="assets/WhatsApp Image 2026-03-25 at 01.24.46.jpeg" class="mobile-only" target="_blank">Certificate</a>
      </nav>
      <div class="logo">
        <a href="index.html"><img src="assets/Final logo-01.png" alt="Freshambo Logo"></a>
      </div>
    </div>
    <div class="nav-right">
      <a href="assets/WhatsApp Image 2026-03-25 at 01.24.46.jpeg" class="desktop-only" target="_blank">Certificate</a>
      <button class="btn-secondary" id="cartBtn" onclick="openCartDrawer()">🛒 Cart (<span id="cartCount">0</span>)</button>
      <a href="profile.html" class="btn-primary" id="signInBtn">Sign In</a>
      <div class="hamburger" id="hamburger" onclick="toggleMenu()">☰</div>
    </div>
  </header>`;
}

function scrollSmooth(id) {
  const el = document.getElementById(id);
  if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
}

function toggleMenu() {
  const nav = document.getElementById('navLinks');
  const ham = document.getElementById('hamburger');
  if (!nav) return;
  nav.classList.toggle('mobile-open');
  ham.textContent = nav.classList.contains('mobile-open') ? '×' : '☰';
}

// ── Footer Builder ──────────────────────────────────────────
function buildFooter() {
  return `
  <footer class="site-footer">
    <div class="footer-grid">
      <div class="footer-col about-col">
        <h3>Freshambo <span>Mango</span></h3>
        <p>Farm-fresh mangoes, delivered with transparency.</p>
      </div>
      <div class="footer-col">
        <h3>Links</h3>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="team.html">Team</a></li>
          <li><a href="privacy.html">Privacy Policy</a></li>
          <li><a href="profile.html">Profile</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Contact</h3>
        <ul>
          <li><strong>WhatsApp</strong>: Use "Place an Order Enquiry"</li>
          <li><strong>Email</strong>: info@freshambo.example</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">© ${new Date().getFullYear()} Freshambo Mango. All rights reserved.</div>
  </footer>`;
}

// ── Cart Drawer HTML ────────────────────────────────────────
function buildCartDrawer() {
  return `
  <div id="cartPane" class="detail-pane cart-pane">
    <div class="detail-header">
      <h2 style="font-size:20px;font-weight:700;color:#2a2b2c;margin:0">Shopping Cart</h2>
      <button class="close-btn" onclick="closeCartDrawer()">
        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    <div class="cart-scroll" id="cartContent" style="flex:1;overflow-y:auto;padding:24px">
      <div class="empty-cart-msg">Your cart is currently empty. Add some delicious mangos!</div>
    </div>
    <div class="cart-footer">
      <div class="cart-total-row">
        <span>Subtotal</span>
        <span id="cartSubtotal" style="font-weight:700;font-size:20px">0</span> Rs.
      </div>
      <button class="btn-checkout" id="checkoutBtn" disabled onclick="doCheckout()">
        Proceed to Secure Checkout
      </button>
    </div>
  </div>`;
}

function doCheckout() {
  alert('Checkout! Total: ' + subtotal() + ' Rs.');
  clearCart();
  closeCartDrawer();
}

// Expose globals
window.updateQty = updateQty;
window.removeFromCart = removeFromCart;
window.openCartDrawer = openCartDrawer;
window.closeCartDrawer = closeCartDrawer;
window.doCheckout = doCheckout;
window.favClick = favClick;
window.goDetail = goDetail;
window.scrollSmooth = scrollSmooth;
window.toggleMenu = toggleMenu;
window.mangos = mangos;
window.db = db;
window.saveToFirestore = saveToFirestore;
window.openWhatsApp = openWhatsApp;
window.buildNavbar = buildNavbar;
window.buildFooter = buildFooter;
window.buildCartDrawer = buildCartDrawer;
window.mangoCardHTML = mangoCardHTML;
window.addToCart = addToCart;
window.renderCart = renderCart;
