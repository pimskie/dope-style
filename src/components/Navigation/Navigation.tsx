"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "home", path: "/" },
  { label: "shop", path: "/shop" },
  { label: "Sign in", path: "/sign-in" },
];

const Navigation = () => {
  const pathname = usePathname();

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
    </nav>
  );
};

export default Navigation;
