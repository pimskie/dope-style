"use client";
import { UserProvider } from "@/context/user.context";
import Navigation from "@/components/Navigation/Navigation";

import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Header from "@/components/Header/Header";
import styles from "./AppContainer.module.css";

import { CartProvider, useCart } from "@/context/cart.context";
import Popover from "@/components/Popover/Popover";
import Cart from "@/components/Cart/Cart";
import Link from "next/link";

const AppContainer = ({ children }: { children?: React.ReactNode }) => {
  const { items } = useCart();
  return (
    <div className={styles.appContainer}>
      <div className={styles.appContainerInner}>
        <Header
          navigation={<Navigation />}
          popover={
            <Popover
              trigger={<div>Cart ({items.length})</div>}
              content={
                <div>
                  <Cart />
                  <Link href="/cart">View cart</Link>
                </div>
              }
            />
          }
        />

        <Breadcrumbs homeElement="Home" separator="|" />

        <div className="container">{children}</div>
      </div>
      <div className={styles.visual}></div>
    </div>
  );
};

export default AppContainer;
