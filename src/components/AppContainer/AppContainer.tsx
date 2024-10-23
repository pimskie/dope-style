"use client";

import { UserProvider } from "@/context/user.context";
import Navigation from "@/components/Navigation/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Header from "@/components/Header/Header";
import styles from "./AppContainer.module.css";

import { CartProvider } from "@/context/cart.context";
const AppContainer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className={styles.appContainer}>
      <div className={styles.appContainerInner}>
        <UserProvider>
          <CartProvider>
            <Header navigation={<Navigation />} />

            <Breadcrumbs homeElement="Home" separator="|" />

            <div className="container">{children}</div>
          </CartProvider>
        </UserProvider>
      </div>
      <div className={styles.visual}></div>
    </div>
  );
};

export default AppContainer;
