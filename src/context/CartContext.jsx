import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        // Load cart from localStorage on init
        const savedCart = localStorage.getItem('aditicakes-cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('aditicakes-cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, selectedSize, quantity = 1) => {
        setCartItems(prevItems => {
            // Check if item with same product and size already exists
            const existingItemIndex = prevItems.findIndex(
                item => item.id === product.id && item.selectedSize === selectedSize
            );

            if (existingItemIndex > -1) {
                // Update quantity
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += quantity;
                return updatedItems;
            } else {
                // Add new item
                return [...prevItems, {
                    ...product,
                    selectedSize,
                    quantity,
                }];
            }
        });
    };

    const removeFromCart = (productId, selectedSize) => {
        setCartItems(prevItems =>
            prevItems.filter(item => !(item.id === productId && item.selectedSize === selectedSize))
        );
    };

    const updateQuantity = (productId, selectedSize, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId, selectedSize);
            return;
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId && item.selectedSize === selectedSize
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const isInCart = (productId, selectedSize) => {
        return cartItems.some(item => item.id === productId && item.selectedSize === selectedSize);
    };

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartCount,
        isInCart,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
