"use client";
import Navigation from "@/components/Navigation/Navigation";

import Header from "@/components/Header/Header";
import styles from "./AppContainer.module.css";

import { useCart } from "@/context/cart.context";
import Popover from "@/components/Popover/Popover";
import Cart from "@/components/Cart/Cart";
import { Link } from "@/i18n/routing";

import { useTranslations } from "next-intl";

const AppContainer = ({ children }: { children?: React.ReactNode }) => {
  const t = useTranslations();

  const { items } = useCart();

  return (
    <div className={styles.appContainer}>
      <div className={styles.appContainerInner}>
        <Header
          navigation={<Navigation />}
          popover={
            <Popover
              trigger={
                <div>
                  {t("cart.cart")} ({items.length})
                </div>
              }
              content={
                <div>
                  <Cart />
                  <Link href="/cart">{t("cart.view")}</Link>
                </div>
              }
            />
          }
        />

        <main className={styles.main}>
          <div className="container">{children}</div>
        </main>
      </div>
      <div className={styles.visual}></div>
    </div>
  );
};

export default AppContainer;
