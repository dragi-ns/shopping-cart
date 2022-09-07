import { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children, initialItems = [] }) {
  const [items, setItems] = useState(initialItems);

  function addItem(item, quantity) {
    setItems((prevItems) => {
      const exists = prevItems.find((prevItem) => prevItem.id === item.id);
      if (exists) {
        return _updateItem(prevItems, item.id, quantity);
      }
      return [...prevItems, { ...item, quantity }];
    });
  }

  function updateItem(itemId, quantity) {
    setItems((prevItems) => {
      return prevItems.map((prevItem) => {
        return prevItem.id === itemId ? { ...prevItem, quantity } : prevItem;
      });
    });
  }

  function removeItem(itemId) {
    setItems((prevItems) => {
      return prevItems.filter((prevItem) => prevItem.id !== itemId);
    });
  }

  function getTotalItems() {
    return items.reduce((total, item) => total + item.quantity, 0);
  }

  function getTotalPrice() {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  function _updateItem(prevItems, itemId, quantity) {
    return prevItems.map((prevItem) => {
      if (prevItem.id === itemId) {
        let newQuantity = prevItem.quantity + quantity;
        /*
          - Maybe we fetch the current item quantity
          -  ¯\_(ツ)_/¯
        */
        if (newQuantity > 100) {
          newQuantity = 100;
        }
        return { ...prevItem, quantity: newQuantity };
      }
      return prevItem;
    });
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        updateItem,
        removeItem,
        getTotalItems,
        getTotalPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
