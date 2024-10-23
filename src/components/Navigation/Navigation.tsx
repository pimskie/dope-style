"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { UserContext } from "@/context/user.context";
import { signOutUser } from "@/utils/firebase/authentication";
import Cart from "@/components/Cart/Cart";
import Popover from "@/components/Popover/Popover";

import { useCart } from "@/context/cart.context";

import styles from "./Navigation.module.css";

const links = [
  { label: "home", path: "/" },
  { label: "shop", path: "/shop" },
];

const Navigation = () => {
  const pathname = usePathname();
  const { currentUser } = useContext(UserContext);
  const [isCartOpen, setIsCartOpen] = useState<Boolean>(false);

  const { items } = useCart();

  const onSignOutClicked = async () => {
    await signOutUser();
  };

  return (
    <nav className={styles.navigation}>
      <div className={styles.navigationItems}>
        {links.map((link) => (
          <Link
            className={`${styles.navigationLink} ${
              pathname === link.path ? "active" : ""
            }`}
            href={link.path}
            key={link.label}
          >
            <div className={styles.navigationLabel}>{link.label}</div>
            <div className={styles.navigationLabelBackground}></div>
          </Link>
        ))}
      </div>

      <div className="relative flex gap-4">
        {currentUser ? (
          <div className="flex gap-4">
            <button onClick={onSignOutClicked}>Sign out</button>
          </div>
        ) : (
          <Link href="/sign-in" className="block px-2 py-3">
            Sign in
          </Link>
        )}

        <Popover trigger={`Cart (${items.length})`} content={<Cart />} />
      </div>
    </nav>
  );
};

export default Navigation;
