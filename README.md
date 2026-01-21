# Aditi Cakes 🎂

A beautiful, modern React website for Aditi Cakes - a home bakery business specializing in custom cakes, brownies, cupcakes, and cookies.

## 🌟 Features

- **Mobile-First Design**: Optimized for phone viewing, perfect for Instagram marketing
- **Product Catalog**: Browse cakes, brownies, cupcakes, and cookies
- **Cart System**: Add items to cart and view order summary
- **Contact Integration**: Direct links to WhatsApp and Instagram
- **SEO Optimized**: Meta tags and proper structure for search visibility

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/        # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ProductCard.jsx
├── context/          # React Context
│   └── CartContext.jsx
├── data/             # Product data
│   └── products.js
├── pages/            # Page components
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── About.jsx
│   └── Contact.jsx
└── App.jsx           # Main app component
```

## 🖼️ Adding Product Images

Place your product images in the `public/images/products/` folder:
- `cake1.jpg` through `cake6.jpg`
- `brownie1.jpg` through `brownie3.jpg`
- `cupcake1.jpg` through `cupcake3.jpg`
- `cookie1.jpg` through `cookie3.jpg`

Recommended image size: 800x600 pixels

## 🌐 Deployment

### Deploy to GitHub Pages

1. Update `vite.config.js` to add your base:
   ```js
   base: '/your-repo-name/'
   ```

2. Build the project:
   ```bash
   npm run build
   ```

3. Deploy the `dist` folder

### Deploy to Render

1. Create a new Static Site on Render
2. Connect your GitHub repository
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. It will auto-detect Vite and configure everything
3. Click Deploy!

## 📱 WhatsApp Setup

Replace `your-number` in the code with the actual WhatsApp number in international format:
- Search and replace `https://wa.me/your-number` with `https://wa.me/91XXXXXXXXXX`

## 🎨 Customization

### Colors
Edit the CSS variables in `src/index.css`:
```css
:root {
  --primary: #d4506f;
  --primary-dark: #b83d5b;
  --accent: #ff9a76;
}
```

### Products
Edit product data in `src/data/products.js`

## 📞 Contact

- Instagram: [@aditi_cakes](https://www.instagram.com/aditi_cakes)
- WhatsApp: Message for orders

---

Made with ❤️ for Aditi Cakes
