import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products, categories, getProductsByCategory } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedCategory, setSelectedCategory] = useState(
        searchParams.get('category') || 'all'
    );
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        let result = getProductsByCategory(selectedCategory);

        if (searchQuery) {
            result = result.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setFilteredProducts(result);
    }, [selectedCategory, searchQuery]);

    const handleCategoryChange = (categoryId) => {
        setSelectedCategory(categoryId);
        if (categoryId === 'all') {
            searchParams.delete('category');
        } else {
            searchParams.set('category', categoryId);
        }
        setSearchParams(searchParams);
    };

    return (
        <div className="products-page">
            <div className="products-header">
                <div className="container">
                    <h1 className="page-title">Our Products</h1>
                    <p className="page-subtitle">
                        Explore our delicious collection of freshly baked treats
                    </p>
                </div>
            </div>

            <div className="container">
                {/* Search and Filter */}
                <div className="products-controls">
                    <div className="search-box">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input"
                        />
                    </div>

                    <div className="category-filters">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                                onClick={() => handleCategoryChange(category.id)}
                            >
                                <span className="category-icon">{category.icon}</span>
                                <span className="category-name">{category.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Products Grid */}
                <div className="products-section">
                    {filteredProducts.length > 0 ? (
                        <>
                            <div className="products-count">
                                Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
                            </div>
                            <div className="products-grid grid-3">
                                {filteredProducts.map(product => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <div className="no-products">
                            <span className="no-products-icon">🔍</span>
                            <h3>No products found</h3>
                            <p>Try adjusting your search or filter to find what you're looking for.</p>
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedCategory('all');
                                    searchParams.delete('category');
                                    setSearchParams(searchParams);
                                }}
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Products;
