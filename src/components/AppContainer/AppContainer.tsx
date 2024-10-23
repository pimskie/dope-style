"use client";

import { UserProvider } from "@/context/user.context";
import Navigation from "@/components/Navigation/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

import { CartProvider } from "@/context/cart.context";
const AppContainer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="app-container">
      <UserProvider>
        <CartProvider>
          <Navigation />

          <Breadcrumbs homeElement="Home" separator="|" />

          <div className="container">{children}</div>
        </CartProvider>
      </UserProvider>
    </div>
  );
};

export default AppContainer;
