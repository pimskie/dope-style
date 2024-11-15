import Heading from "../Typography/Heading/Heading";
import styles from "./Cart.module.css";

import { useCart } from "@/context/cart.context";

import { formatCurrency } from "@/utils/intl/formatNumber";

import CartItem from "./CartItem";
import VerticalStack from "@/components/Layout/Stack/VerticalStack";

import { useTranslations } from "next-intl";

const Cart = () => {
  const t = useTranslations("cart");

  const { items, cartTotalPrice } = useCart();

  const renderCart = () => {
    return (
      <div>
        {renderCartItems()}
        <div>
          {t("totalPrice")}: {formatCurrency(cartTotalPrice)}
        </div>
      </div>
    );
  };

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
        {items.length ? renderCart() : t("empty")}
      </div>
    </div>
  );
};

export default Cart;
