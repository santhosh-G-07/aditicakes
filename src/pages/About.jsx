import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="container">
                    <h1 className="page-title">About Aditi Cakes</h1>
                    <p className="page-subtitle">
                        Where passion meets perfection in every bite
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="section">
                <div className="container">
                    <div className="story-content">
                        <div className="story-image">
                            <img
                                src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&h=600&fit=crop"
                                alt="Baking process"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/800x600/d4506f/ffffff?text=Aditi+Cakes';
                                }}
                            />
                        </div>
                        <div className="story-text">
                            <h2>Our Story</h2>
                            <p>
                                Aditi Cakes began in October 2024 with a simple mission: to spread joy through
                                delicious, handcrafted baked goods. What started as a passion for creating beautiful
                                cakes has grown into a journey of making special moments even sweeter for our community.
                            </p>
                            <p>
                                Every cake, brownie, cupcake, and cookie is made fresh to order with premium ingredients
                                and absolutely no preservatives. We believe in the magic of homemade goodness and the
                                happiness it brings to celebrations, big and small.
                            </p>
                            <p>
                                Today, with over 100 happy customers and counting, we're proud to be a trusted name
                                for quality baked treats. Each order is crafted with love, attention to detail, and
                                a commitment to making your celebrations memorable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section section">
                <div className="container">
                    <h2 className="section-title">What Makes Us Special</h2>
                    <div className="values-grid">
                        <div className="value-card">
                            <div className="value-icon">🎂</div>
                            <h3>Made Fresh Daily</h3>
                            <p>
                                Every item is baked fresh to order. No mass production, no shortcuts –
                                just pure, handcrafted quality.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">💯</div>
                            <h3>Premium Ingredients</h3>
                            <p>
                                We use only the finest ingredients with absolutely no preservatives or
                                artificial additives.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">✨</div>
                            <h3>Customization</h3>
                            <p>
                                Your celebration, your way. We offer extensive customization options
                                for a truly personal touch.
                            </p>
                        </div>
                        <div className="value-card">
                            <div className="value-icon">❤️</div>
                            <h3>Baked with Love</h3>
                            <p>
                                Every creation is made with passion, care, and attention to detail to
                                ensure perfection.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Offerings Section */}
            <section className="offerings-section section">
                <div className="container">
                    <h2 className="section-title">What We Offer</h2>
                    <div className="offerings-grid">
                        <div className="offering-item">
                            <span className="offering-icon">✓</span>
                            <div>
                                <h3>Custom & Regular Cakes</h3>
                                <p>From simple classics to elaborate custom designs</p>
                            </div>
                        </div>
                        <div className="offering-item">
                            <span className="offering-icon">✓</span>
                            <div>
                                <h3>Brownies & Cupcakes</h3>
                                <p>Perfect for parties or personal indulgence</p>
                            </div>
                        </div>
                        <div className="offering-item">
                            <span className="offering-icon">✓</span>
                            <div>
                                <h3>Cookies & Seasonal Items</h3>
                                <p>Delicious treats for every occasion</p>
                            </div>
                        </div>
                        <div className="offering-item">
                            <span className="offering-icon">✓</span>
                            <div>
                                <h3>Egg & Eggless Options</h3>
                                <p>Something delicious for everyone</p>
                            </div>
                        </div>
                        <div className="offering-item">
                            <span className="offering-icon">✓</span>
                            <div>
                                <h3>Photo & Name Cakes</h3>
                                <p>Personalized for your special moments</p>
                            </div>
                        </div>
                        <div className="offering-item">
                            <span className="offering-icon">✓</span>
                            <div>
                                <h3>All Sizes Available</h3>
                                <p>From ½ kg to larger celebrations</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="container">
                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-number">100+</div>
                            <div className="stat-label">Happy Customers</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">4+</div>
                            <div className="stat-label">Product Categories</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">24hrs</div>
                            <div className="stat-label">Advance Notice</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">100%</div>
                            <div className="stat-label">Satisfaction</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="about-cta section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Make Your Celebration Sweet?</h2>
                        <p>Browse our products or get in touch to place your custom order!</p>
                        <div className="cta-buttons">
                            <Link to="/products" className="btn btn-primary">
                                View Products
                            </Link>
                            <Link to="/contact" className="btn btn-secondary">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
