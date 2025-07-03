A fully functional, responsive **Progressive Web App (PWA)** e-commerce store built using vanilla HTML, CSS, and JavaScript. It supports:

- 🟢 Offline capability via Service Workers and Cache API  
- 🟢 Installable on desktop/mobile (Add to Home Screen)  
- 🟢 Push Notification support  
- 🟢 Responsive design for all screen sizes  
- 🟢 Cart persistence via localStorage  
- ❌ No build tools, frameworks, or folders — everything in the root directory

---

## 📦 Project Structure
/
├── index.html # Main UI layout
├── styles.css # Responsive styling
├── app.js # Product logic, cart, SW & PWA logic
├── service-worker.js # Offline support
├── manifest.json # PWA metadata
├── icon-192.png # App icon (192x192)
└── icon-512.png # App icon (512x512)

## 🚀 Features

- ✅ **Offline support**: Fully functional without internet
- ✅ **Responsive UI**: Works well on phones, tablets, and desktops
- ✅ **Installable**: Prompts users to install the app to home screen
- ✅ **Push notifications**: Basic notification support (local-only)
- ✅ **Cart persistence**: Cart saved even after refresh or closing tab

## 🧰 How to Run Locally

### Step 1: Clone or Download
```bash
git clone https://github.com/yourusername/pwa-ecommerce.git
cd pwa-ecommerce
Step 2: Open in VS Code
Step 3: Serve Locally (One of the following options)
Option A: Using VS Code Live Server
Install "Live Server" extension in VS Code

Right-click index.html > Open with Live Server
