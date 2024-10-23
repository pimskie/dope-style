"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { UserContext } from "@/context/user.context";
import { signOutUser } from "@/utils/firebase/authentication";
import Cart from "@/components/Cart/Cart";
import Popover from "@/components/Popover/Popover";

const links = [
  { label: "home", path: "/" },
  { label: "shop", path: "/shop" },
];

const Navigation = () => {
  const pathname = usePathname();
  const { currentUser } = useContext(UserContext);
  const [isCartOpen, setIsCartOpen] = useState<Boolean>(false);

  const onCartToggle = () => {
    setIsCartOpen(!isCartOpen);
  };

  const onSignOutClicked = async () => {
    await signOutUser();
  };

  return (
    <nav>
      <div className="container">
        <div className="flex justify-between">
          <div className="nav-items flex gap-4">
            {links.map((link) => (
              <Link
                className={`block px-2 py-3 ${
                  pathname === link.path ? "active" : ""
                }`}
                href={link.path}
                key={link.label}
              >
                {link.label}
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

            <Popover trigger={"Cart"} content={<Cart />} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
