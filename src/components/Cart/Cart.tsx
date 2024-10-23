import Heading from "../Typography/Heading/Heading";
import styles from "./Cart.module.css";

import { useCart } from "@/context/cart.context";

const Cart = () => {
  const { items } = useCart();

  const renderCartItems = () => {
    return items.map((item) => (
      <div key={item.product.id}>
        {item.product.name} ({item.quantity})
      </div>
    ));
  };

  return (
    <div className={styles.cart}>
      <Heading Tag="h3" />

      <div className={styles.cartContents}>
        {items.length ? renderCartItems() : "No items in cart"}
      </div>
    </div>
  );
};

export default Cart;
