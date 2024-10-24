import PageClient from "./pageClient";
import styles from "./page.module.css";
export const metadata = {
  title: "Cart",
};

const Page = () => {
  return (
    <div className={styles.cartLayout}>
      <PageClient />
    </div>
  );
};

export default Page;
