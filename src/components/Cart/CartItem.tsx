import type { CartItem } from "@/types/CartItem";

import { useCart } from "@/context/cart.context";
import styles from "./CartItem.module.css";
import { formatCurrency } from "@/utils/intl/formatNumber";

interface CartItemProps {
  item: CartItem;
}

const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeItem } = useCart();

  const onQuantityChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    const quantity = event.target.valueAsNumber;

    updateQuantity(item, quantity);
  };

  const onRemoveItem = () => {
    removeItem(item);
  };

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItemImage}
        src={item.product.image}
        alt={item.product.name}
      />
      <div className={styles.cartItemName}>{item.product.name}</div>
      <div className={styles.cartItemQuantity}>{item.quantity}</div>
      <div className={styles.cartItemQuantityUpdate}>
        <input
          className="form-input"
          type="number"
          value={item.quantity}
          onChange={onQuantityChanged}
          max={item.product.stock}
          min={1}
        />
      </div>
      <div className={styles.cartItemPrice}>
        {formatCurrency(item.product.price * item.quantity)}
      </div>

      <div className={styles.cartItemRemove}>
        <button onClick={onRemoveItem}>x</button>
      </div>
    </div>
  );
};

export default CartItem;
