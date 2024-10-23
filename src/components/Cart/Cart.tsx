import Heading from "../Typography/Heading/Heading";
import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <div>
      <Heading Tag="h3" className={styles.cartHeading} />

      <div className={styles.cartContents}>Contents, yo</div>
    </div>
  );
};

export default Cart;
