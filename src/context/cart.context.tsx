import { Product } from "@/types/Product";
import { createContext, useContext, useState } from "react";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
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

  const addItem = (item: CartItem) => {
    const combinedItems = combineProducts([...items], item);

    setCart(combinedItems);
  };

  return (
    <CartContext.Provider value={{ items, addItem }}>
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
