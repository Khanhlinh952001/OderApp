import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //them
  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  //xoa
  const removeFromCart = (item) => {
    const updatedCart = cart.filter((i) => i !== item);
    setCart(updatedCart);
  };
  const contextValue = {
    cart,
    addToCart,
    removeFromCart
  };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
};
