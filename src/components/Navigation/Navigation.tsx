"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";

import { UserContext } from "@/context/user.context";

import { signOutUser } from "@/utils/firebase/authentication";

const links = [
  { label: "home", path: "/" },
  { label: "shop", path: "/shop" },
];

const Navigation = () => {
  const pathname = usePathname();
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const onSignOutClicked = async () => {
    await signOutUser();

    setCurrentUser(null);
  };

  return (
    <nav className="flex gap-4">
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

      {currentUser ? (
        <div>
          Welcome!
          <button onClick={onSignOutClicked}>Sign out</button>
        </div>
      ) : (
        <Link href="/sign-in" className="block px-2 py-3">
          Sign in
        </Link>
      )}
    </nav>
  );
};

export default Navigation;
