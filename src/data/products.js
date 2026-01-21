// Product Categories
export const categories = [
  { id: 'all', name: 'All Items', icon: '🍰' },
  { id: 'cakes', name: 'Cakes', icon: '🎂' },
  { id: 'brownies', name: 'Brownies', icon: '🍫' },
  { id: 'cupcakes', name: 'Cupcakes', icon: '🧁' },
  { id: 'cookies', name: 'Cookies', icon: '🍪' },
];

// Products Data
export const products = [
  // CAKES
  {
    id: 1,
    name: 'Custom Photo Cake',
    category: 'cakes',
    image: '/images/products/cake1.jpg',
    description: 'Personalized photo cake with your favorite memories. Available in all flavors.',
    features: [
      'Custom photo print',
      'Name personalization',
      'Choice of flavor',
      'Egg & Eggless options',
    ],
    sizes: ['½ kg', '1 kg', '1.5 kg', '2 kg'],
    pricing: 'Contact for pricing',
    popular: true,
    customizable: true,
  },
  {
    id: 2,
    name: 'Classic Vanilla Cake',
    category: 'cakes',
    image: '/images/products/cake2.jpg',
    description: 'Fluffy vanilla cake with smooth buttercream frosting. A timeless favorite.',
    features: [
      'Fresh ingredients',
      'Light & fluffy texture',
      'Customizable decorations',
      'Both egg & eggless',
    ],
    sizes: ['½ kg', '1 kg', '1.5 kg', '2 kg'],
    pricing: 'Contact for pricing',
    popular: false,
    customizable: true,
  },
  {
    id: 3,
    name: 'Chocolate Truffle Cake',
    category: 'cakes',
    image: '/images/products/cake3.jpg',
    description: 'Rich chocolate cake with layers of chocolate ganache. Pure indulgence.',
    features: [
      'Premium chocolate',
      'Rich & moist',
      'Ganache layers',
      'Egg & Eggless available',
    ],
    sizes: ['½ kg', '1 kg', '1.5 kg', '2 kg'],
    pricing: 'Contact for pricing',
    popular: true,
    customizable: true,
  },
  {
    id: 4,
    name: 'Red Velvet Cake',
    category: 'cakes',
    image: '/images/products/cake4.jpg',
    description: 'Stunning red velvet cake with cream cheese frosting. Instagram-worthy perfection.',
    features: [
      'Vibrant red color',
      'Cream cheese frosting',
      'Soft texture',
      'Name customization',
    ],
    sizes: ['½ kg', '1 kg', '1.5 kg', '2 kg'],
    pricing: 'Contact for pricing',
    popular: true,
    customizable: true,
  },
  {
    id: 5,
    name: 'Fresh Fruit Cake',
    category: 'cakes',
    image: '/images/products/cake5.webp',
    description: 'Light cake topped with fresh seasonal fruits. Healthy and delicious.',
    features: [
      'Fresh seasonal fruits',
      'Light cream',
      'Less sweet option',
      'Perfect for health-conscious',
    ],
    sizes: ['½ kg', '1 kg', '1.5 kg', '2 kg'],
    pricing: 'Contact for pricing',
    popular: false,
    customizable: true,
  },
  {
    id: 6,
    name: 'Black Forest Cake',
    category: 'cakes',
    image: '/images/products/cake6.webp',
    description: 'Classic Black Forest with cherries and chocolate shavings.',
    features: [
      'Cherry compote',
      'Chocolate shavings',
      'Whipped cream',
      'Traditional recipe',
    ],
    sizes: ['½ kg', '1 kg', '1.5 kg', '2 kg'],
    pricing: 'Contact for pricing',
    popular: true,
    customizable: true,
  },

  // BROWNIES
  {
    id: 7,
    name: 'Fudgy Chocolate Brownies',
    category: 'brownies',
    image: '/images/products/brownie1.jpg',
    description: 'Ultra-fudgy chocolate brownies that melt in your mouth.',
    features: [
      'Super fudgy texture',
      'Premium chocolate',
      'No preservatives',
      'Egg & Eggless options',
    ],
    sizes: ['Box of 4', 'Box of 6', 'Box of 12'],
    pricing: 'Contact for pricing',
    popular: true,
    customizable: false,
  },
  {
    id: 8,
    name: 'Walnut Brownies',
    category: 'brownies',
    image: '/images/products/brownie2.jpeg',
    description: 'Classic brownies with crunchy walnuts. Perfect combo of texture.',
    features: [
      'Fresh walnuts',
      'Chewy texture',
      'Rich chocolate',
      'Freshly baked',
    ],
    sizes: ['Box of 4', 'Box of 6', 'Box of 12'],
    pricing: 'Contact for pricing',
    popular: false,
    customizable: false,
  },
  {
    id: 9,
    name: 'Cream Cheese Brownies',
    category: 'brownies',
    image: '/images/products/brownie3.jpg',
    description: 'Chocolate brownies swirled with tangy cream cheese.',
    features: [
      'Cream cheese swirl',
      'Perfect balance',
      'Made to order',
      'Premium ingredients',
    ],
    sizes: ['Box of 4', 'Box of 6', 'Box of 12'],
    pricing: 'Contact for pricing',
    popular: true,
    customizable: false,
  },

  // CUPCAKES
  {
    id: 10,
    name: 'Vanilla Cupcakes',
    category: 'cupcakes',
    image: '/images/products/cupcake1.webp',
    description: 'Classic vanilla cupcakes with buttercream frosting.',
    features: [
      'Fluffy & moist',
      'Buttercream frosting',
      'Custom toppers available',
      'Egg & Eggless',
    ],
    sizes: ['Box of 4', 'Box of 6', 'Box of 12'],
    pricing: 'Contact for pricing',
    popular: true,
    customizable: true,
  },
  {
    id: 11,
    name: 'Chocolate Cupcakes',
    category: 'cupcakes',
    image: '/images/products/cupcake2.jpg',
    description: 'Rich chocolate cupcakes with chocolate ganache.',
    features: [
      'Rich chocolate',
      'Silky ganache',
      'Personalized toppers',
      'Both variants',
    ],
    sizes: ['Box of 4', 'Box of 6', 'Box of 12'],
    pricing: 'Contact for pricing',
    popular: true,
    customizable: true,
  },
  {
    id: 12,
    name: 'Red Velvet Cupcakes',
    category: 'cupcakes',
    image: '/images/products/cupcake3.jpg',
    description: 'Beautiful red velvet cupcakes with cream cheese frosting.',
    features: [
      'Stunning presentation',
      'Cream cheese frosting',
      'Perfect for parties',
      'Made fresh',
    ],
    sizes: ['Box of 4', 'Box of 6', 'Box of 12'],
    pricing: 'Contact for pricing',
    popular: false,
    customizable: true,
  },

  // COOKIES
  {
    id: 13,
    name: 'Chocolate Chip Cookies',
    category: 'cookies',
    image: '/images/products/cookie1.jpg',
    description: 'Classic chocolate chip cookies. Crispy outside, chewy inside.',
    features: [
      'Chocolate chips',
      'Perfect texture',
      'No preservatives',
      'Pack of 6/12',
    ],
    sizes: ['Pack of 6', 'Pack of 12', 'Pack of 24'],
    pricing: 'Contact for pricing',
    popular: true,
    customizable: false,
  },
  {
    id: 14,
    name: 'Oatmeal Raisin Cookies',
    category: 'cookies',
    image: '/images/products/cookie2.jpg',
    description: 'Healthy oatmeal cookies with plump raisins.',
    features: [
      'Whole oats',
      'Natural sweetness',
      'Healthier option',
      'Freshly baked',
    ],
    sizes: ['Pack of 6', 'Pack of 12', 'Pack of 24'],
    pricing: 'Contact for pricing',
    popular: false,
    customizable: false,
  },
  {
    id: 15,
    name: 'Double Chocolate Cookies',
    category: 'cookies',
    image: '/images/products/cookie3.webp',
    description: 'For chocolate lovers! Cocoa cookies with chocolate chunks.',
    features: [
      'Double chocolate',
      'Super indulgent',
      'Soft & chewy',
      'Made to order',
    ],
    sizes: ['Pack of 6', 'Pack of 12', 'Pack of 24'],
    pricing: 'Contact for pricing',
    popular: true,
    customizable: false,
  },
];

// Get products by category
export const getProductsByCategory = (categoryId) => {
  if (categoryId === 'all') return products;
  return products.filter(product => product.category === categoryId);
};

// Get product by ID
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

// Get related products
export const getRelatedProducts = (productId, categoryId, limit = 4) => {
  return products
    .filter(p => p.id !== productId && p.category === categoryId)
    .slice(0, limit);
};

// Get popular products
export const getPopularProducts = (limit = 6) => {
  return products.filter(p => p.popular).slice(0, limit);
};
