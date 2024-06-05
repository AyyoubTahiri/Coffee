import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1, total: (cartItem.quantity + 1) * cartItem.price }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1, total: item.price }];
      }
    });
  };

  const removeItemFromCart = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const updateItemQuantity = (index, newQuantity) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      if (newQuantity <= 0) {
        updatedItems.splice(index, 1);
      } else {
        updatedItems[index].quantity = newQuantity;
        updatedItems[index].total = newQuantity * updatedItems[index].price;
      }
      return updatedItems;
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, updateItemQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
