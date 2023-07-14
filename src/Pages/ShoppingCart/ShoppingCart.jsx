import React, { useState, useEffect } from 'react';
import './ShoppingCart.css';

function ShoppingCart() {
  const [products] = useState([
    {
      id: 1,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyrAHzU2VvAXzmyj2MmThtgTWjHTsCIufMVw&usqp=CAU',
      name: 'Setthoscope',
      price: 599,
    },
    {
      id: 2,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtmcLrQGqMM2z-K5pl9XJrfCaHXyUCCF1nuQ&usqp=CAU',
      name: 'Omron Blood Pressure Machine',
      price: 1999,
    },
    {
      id: 3,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShG8e3WMOEn6arYAAFAHG5GuhBziMwOZP78w&usqp=CAU',
      name: 'Thermpometer',
      price: 500,
    },
    {
      id: 4,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_WhxHyVAbeqIIb6DmqLBJwUdJXvOMuLLm9w&usqp=CAU',
      name: 'Stain Steel scissor',
      price: 700,
    },
    {
      id: 5,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFTBvbUu6mX4aC4OX7LMMCGSE87f78GJULlA&usqp=CAU',
      name: 'Injection',
      price: 150,
    },
    {
      id: 6,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF0sniz9oIpjjWTQGCL5UtOqQH-Vimwn6wmw&usqp=CAU',
      name: 'Setthoscope Set',
      price: 1500,
    },
  ]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const handleShow = () => {
    setShowCart(!showCart);
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container">
      <header>
        <h1>Shopping Cart</h1>
        <button className="cart" onClick={handleShow}>
          {showCart ? 'Hide Cart' : 'Show Cart'} ({totalItems})
        </button>
      </header>

      {showCart ? (
        <div className="cart-container">
          <h2>Cart Items:</h2>
          {cart.length > 0 ? (
            <ul className="product-list">
              {cart.map((item) => (
                <li key={item.id} className="product-item">
                  <img src={item.url} alt={item.name} className="product-image" />
                  <div>
                    <h3>{item.name}</h3>
                    <p>Price: {item.price}</p>
                    <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty.</p>
          )}
          <p>
            <b>Subtotal: {subtotal}</b>
          </p>
        </div>
      ) : (
        <div className="product-container">
          <h2>Products:</h2>
          {products.length > 0 ? (
            <ul className="product-list">
              {products.map((item) => (
                <li key={item.id} className="product-item">
                  <img src={item.url} alt={item.name} className="product-image" />
                  <div>
                    <h3>{item.name}</h3>
                    <p>Price: {item.price}</p>
                    <button onClick={() => addToCart(item)}>Add to Cart</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No products available.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
