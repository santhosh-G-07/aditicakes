import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className="product-card">
            <div className="product-image-container">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300/d4506f/ffffff?text=' +
                            encodeURIComponent(product.name);
                    }}
                />
                <div className="product-badges">
                    {product.popular && <span className="badge badge-popular">Popular</span>}
                    {product.customizable && <span className="badge badge-custom">Customizable</span>}
                </div>
            </div>

            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-description">{product.description}</p>

                <div className="product-footer">
                    <span className="product-pricing">{product.pricing}</span>
                    <button className="btn-view">
                        View Details →
                    </button>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
