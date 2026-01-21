import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="cart-page">
                <div className="container">
                    <div className="empty-cart">
                        <span className="empty-cart-icon">🛒</span>
                        <h2>Your Cart is Empty</h2>
                        <p>Add some delicious treats to get started!</p>
                        <Link to="/products" className="btn btn-primary">
                            Browse Products
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    const whatsappOrder = () => {
        const orderDetails = cartItems.map(item =>
            `${item.name} (${item.selectedSize}) x ${item.quantity}`
        ).join('\n');

        const message = `Hi! I'd like to order:\n\n${orderDetails}\n\nPlease let me know the total price and delivery details. Thank you!`;

        window.open(`https://wa.me/919043129343?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <div className="cart-page">
            <div className="container">
                <div className="cart-header">
                    <h1>Your Cart</h1>
                    <button className="btn-clear" onClick={clearCart}>
                        Clear Cart
                    </button>
                </div>

                <div className="cart-content">
                    <div className="cart-items">
                        {cartItems.map((item, index) => (
                            <div key={`${item.id}-${item.selectedSize}-${index}`} className="cart-item">
                                <div className="cart-item-image">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/150/d4506f/ffffff?text=' +
                                                encodeURIComponent(item.name.substring(0, 10));
                                        }}
                                    />
                                </div>

                                <div className="cart-item-details">
                                    <Link to={`/product/${item.id}`} className="cart-item-name">
                                        {item.name}
                                    </Link>
                                    <p className="cart-item-size">Size: {item.selectedSize}</p>
                                    <p className="cart-item-category">{item.category}</p>
                                </div>

                                <div className="cart-item-quantity">
                                    <button
                                        className="quantity-btn"
                                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity - 1)}
                                    >
                                        -
                                    </button>
                                    <span className="quantity-value">{item.quantity}</span>
                                    <button
                                        className="quantity-btn"
                                        onClick={() => updateQuantity(item.id, item.selectedSize, item.quantity + 1)}
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    className="cart-item-remove"
                                    onClick={() => removeFromCart(item.id, item.selectedSize)}
                                    aria-label="Remove item"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-content">
                            <div className="summary-row">
                                <span>Total Items:</span>
                                <span className="summary-value">
                                    {cartItems.reduce((total, item) => total + item.quantity, 0)}
                                </span>
                            </div>
                            <div className="summary-row">
                                <span>Different Products:</span>
                                <span className="summary-value">{cartItems.length}</span>
                            </div>
                            <div className="summary-divider"></div>
                            <div className="summary-info">
                                <p>💬 Contact us for pricing</p>
                                <p>📦 Delivery & pickup available</p>
                                <p>⏰ 24 hours advance notice</p>
                            </div>
                        </div>

                        <button className="btn btn-whatsapp btn-large" onClick={whatsappOrder}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Order via WhatsApp
                        </button>

                        <Link to="/products" className="btn btn-secondary btn-large">
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
