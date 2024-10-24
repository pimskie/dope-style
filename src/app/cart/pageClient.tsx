"use client";

import Cart from "@/components/Cart/Cart";
import { useEffect } from "react";

const PageClient = () => {
  useEffect(() => {
    console.log("Cart page client");
  }, []);

  return (
    <div>
      <Cart />
    </div>
  );
};

export default PageClient;
