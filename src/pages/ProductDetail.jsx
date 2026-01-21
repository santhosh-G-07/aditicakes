import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import './ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const product = getProductById(id);
    const { addToCart } = useCart();

    const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
    const [quantity, setQuantity] = useState(1);
    const [showAddedMessage, setShowAddedMessage] = useState(false);

    if (!product) {
        return (
            <div className="product-not-found">
                <div className="container">
                    <h1>Product Not Found</h1>
                    <p>Sorry, the product you're looking for doesn't exist.</p>
                    <Link to="/products" className="btn btn-primary">
                        Back to Products
                    </Link>
                </div>
            </div>
        );
    }

    const relatedProducts = getRelatedProducts(product.id, product.category);

    const handleAddToCart = () => {
        addToCart(product, selectedSize, quantity);
        setShowAddedMessage(true);
        setTimeout(() => setShowAddedMessage(false), 3000);
    };

    const whatsappMessage = `Hi! I'm interested in ordering:\n${product.name}\nSize: ${selectedSize}\nQuantity: ${quantity}`;

    return (
        <div className="product-detail-page">
            <div className="container">
                {/* Breadcrumb */}
                <div className="breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/products">Products</Link>
                    <span>/</span>
                    <span>{product.name}</span>
                </div>

                {/* Product Detail */}
                <div className="product-detail-container">
                    <div className="product-detail-image">
                        <img
                            src={product.image}
                            alt={product.name}
                            onError={(e) => {
                                e.target.src = 'https://via.placeholder.com/600x600/d4506f/ffffff?text=' +
                                    encodeURIComponent(product.name);
                            }}
                        />
                        <div className="product-detail-badges">
                            {product.popular && <span className="badge badge-popular">Popular</span>}
                            {product.customizable && <span className="badge badge-custom">Customizable</span>}
                        </div>
                    </div>

                    <div className="product-detail-info">
                        <span className="product-category">{product.category}</span>
                        <h1 className="product-title">{product.name}</h1>
                        <p className="product-description">{product.description}</p>

                        {/* Features */}
                        <div className="product-features">
                            <h3>Features:</h3>
                            <ul>
                                {product.features.map((feature, index) => (
                                    <li key={index}>✓ {feature}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Size Selection */}
                        <div className="product-options">
                            <h3>Select Size:</h3>
                            <div className="size-options">
                                {product.sizes.map(size => (
                                    <button
                                        key={size}
                                        className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                                        onClick={() => setSelectedSize(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="quantity-section">
                            <h3>Quantity:</h3>
                            <div className="quantity-controls">
                                <button
                                    className="quantity-btn"
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                >
                                    -
                                </button>
                                <span className="quantity-value">{quantity}</span>
                                <button
                                    className="quantity-btn"
                                    onClick={() => setQuantity(quantity + 1)}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="pricing-section">
                            <p className="pricing-label">Pricing:</p>
                            <p className="pricing-value">{product.pricing}</p>
                            <p className="pricing-note">
                                💬 Contact us for exact pricing and customization options
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="action-buttons">
                            <button className="btn btn-primary btn-large" onClick={handleAddToCart}>
                                Add to Cart
                            </button>
                            <a
                                href={`https://wa.me/919043129343?text=${encodeURIComponent(whatsappMessage)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-whatsapp btn-large"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Order on WhatsApp
                            </a>
                        </div>

                        {showAddedMessage && (
                            <div className="added-message">
                                ✓ Added to cart! <Link to="/cart">View Cart</Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <div className="related-products section">
                        <h2 className="section-title">You May Also Like</h2>
                        <div className="products-grid grid-4">
                            {relatedProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductDetail;
