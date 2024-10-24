import Heading from "../Typography/Heading/Heading";
import styles from "./Cart.module.css";

import { useCart } from "@/context/cart.context";

import CartItem from "./CartItem";
import VerticalStack from "@/components/Layout/Stack/VerticalStack";

const Cart = () => {
  const { items } = useCart();

  const renderCartItems = () => {
    return (
      <VerticalStack>
        {items.map((item) => (
          <CartItem key={item.product.id} item={item} />
        ))}
      </VerticalStack>
    );
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
