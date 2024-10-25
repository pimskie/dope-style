"use client";

import type { CartItem } from "@/types/CartItem";
import { createContext, useContext, useEffect, useState } from "react";

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  updateQuantity: (item: CartItem, quantity: number) => void;
  removeItem: (item: CartItem) => void;
  cartTotalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

const combineProducts = (items: CartItem[], item: CartItem) => {
  const existingItem = items.find((i) => i.product.id === item.product.id);

  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    items.push(item);
  }

  return items;
};

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setCart] = useState<CartItem[]>([]);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  useEffect(() => {
    const totalPrice = items.reduce((acc, item) => {
      return acc + item.product.price * item.quantity;
    }, 0);

    setCartTotalPrice(totalPrice);
  }, [items]);

  const addItem = (item: CartItem) => {
    const combinedItems = combineProducts([...items], item);

    setCart(combinedItems);
  };

  const updateQuantity = (item: CartItem, quantity: number) => {
    const existingItem = items.find((i) => i.product.id === item.product.id);

    if (existingItem) {
      existingItem.quantity = quantity;
    } else {
      items.push(item);
    }

    setCart([...items]);
  };

  const removeItem = (item: CartItem) => {
    const filteredItems = items.filter((i) => i.product.id !== item.product.id);

    setCart([...filteredItems]);
  };

  return (
    <CartContext.Provider
      value={{ items, addItem, updateQuantity, removeItem, cartTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("useCart has to be used within <CartContext.Provider>");
  }

  return cartContext;
};

export { CartProvider, useCart };
