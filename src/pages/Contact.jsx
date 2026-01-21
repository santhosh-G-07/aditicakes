import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div className="container">
                    <h1 className="page-title">Get in Touch</h1>
                    <p className="page-subtitle">
                        We'd love to hear from you! Reach out for orders or questions.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="contact-content">
                        {/* Contact Info */}
                        <div className="contact-info">
                            <h2>Contact Information</h2>
                            <p className="contact-intro">
                                Ready to order something delicious? We're here to help make your
                                celebrations sweeter!
                            </p>

                            <div className="contact-methods">
                                <a
                                    href="https://wa.me/91904312943?text=Hi! I'd like to order from Aditi Cakes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-method whatsapp"
                                >
                                    <div className="method-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </div>
                                    <div className="method-details">
                                        <h3>WhatsApp</h3>
                                        <p>Message us for quick orders</p>
                                        <span className="method-link">Chat Now →</span>
                                    </div>
                                </a>

                                <a
                                    href="https://www.instagram.com/aditi_cakes"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-method instagram"
                                >
                                    <div className="method-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </div>
                                    <div className="method-details">
                                        <h3>Instagram</h3>
                                        <p>@aditi_cakes</p>
                                        <span className="method-link">Follow Us →</span>
                                    </div>
                                </a>
                            </div>

                            <div className="business-hours">
                                <h3>Ordering Information</h3>
                                <ul>
                                    <li>
                                        <strong>Advance Notice:</strong> 24 hours minimum
                                    </li>
                                    <li>
                                        <strong>Delivery:</strong> Available (charges based on distance)
                                    </li>
                                    <li>
                                        <strong>Pickup:</strong> Available
                                    </li>
                                    <li>
                                        <strong>Payment:</strong> Cash on delivery / UPI
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* FAQ */}
                        <div className="contact-faq">
                            <h2>Frequently Asked Questions</h2>

                            <div className="faq-item">
                                <h3>How do I place an order?</h3>
                                <p>
                                    Simply message us on WhatsApp or Instagram with your requirements,
                                    and we'll help you create the perfect order!
                                </p>
                            </div>

                            <div className="faq-item">
                                <h3>What's the minimum order time?</h3>
                                <p>
                                    We require at least 24 hours advance notice for all orders to ensure
                                    we can make everything fresh and perfect for you.
                                </p>
                            </div>

                            <div className="faq-item">
                                <h3>Do you offer egg-free options?</h3>
                                <p>
                                    Yes! All our products are available in both egg and eggless versions.
                                    Just let us know your preference when ordering.
                                </p>
                            </div>

                            <div className="faq-item">
                                <h3>Can I customize my cake?</h3>
                                <p>
                                    Absolutely! We offer name personalization, photo cakes, flavor
                                    customization, and more. Share your ideas with us!
                                </p>
                            </div>

                            <div className="faq-item">
                                <h3>What sizes do you offer?</h3>
                                <p>
                                    We offer a variety of sizes from ½ kg to larger options. Brownies,
                                    cupcakes, and cookies come in boxes of 4, 6,12, or 24 pieces.
                                </p>
                            </div>

                            <div className="faq-item">
                                <h3>Do you deliver?</h3>
                                <p>
                                    Yes, we offer delivery services. Charges apply based on distance.
                                    Pickup is also available if you prefer!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="contact-cta">
                        <h2>Ready to Order?</h2>
                        <p>Get in touch with us today and let's make your celebration special!</p>
                        <div className="cta-buttons">
                            <a
                                href="https://wa.me/91904312943?text=Hi! I'd like to order from Aditi Cakes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-whatsapp btn-large"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                WhatsApp Us
                            </a>
                            <a
                                href="https://www.instagram.com/aditi_cakes"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-large"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                                DM on Instagram
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
