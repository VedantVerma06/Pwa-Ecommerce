const products = [
  { id: 1, name: "Smartphone", price: 300 },
  { id: 2, name: "Shoes", price: 50 },
  { id: 3, name: "Watch", price: 120 }
];

const productContainer = document.getElementById('products');
const cartContainer = document.getElementById('cart');
let cart = [];

products.forEach(p => {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <button onclick="addToCart(${p.id})">Add to Cart</button>
  `;
  productContainer.appendChild(div);
});

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  renderCart();
  localStorage.setItem('cart', JSON.stringify(cart));
  showNotification(`${item.name} added to cart!`);
}

function renderCart() {
  cartContainer.innerHTML = '<h2>Cart</h2>';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.textContent = `${item.name} - ₹${item.price}`;
    cartContainer.appendChild(div);
  });
}

// Load cart from localStorage
window.addEventListener('load', () => {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
    renderCart();
  }
});

// Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log("Service Worker Registered"));
}

// Install prompt
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.hidden = false;
});

installBtn.addEventListener('click', () => {
  installBtn.hidden = true;
  deferredPrompt.prompt();
});

// Notification permission
Notification.requestPermission().then(permission => {
  console.log("Notification permission:", permission);
});

function showNotification(message) {
  if ('Notification' in window && Notification.permission === 'granted') {
    navigator.serviceWorker.getRegistration().then(reg => {
      reg.showNotification("PWA Shop", {
        body: message,
        icon: "icon-192.png"
      });
    });
  }
}
