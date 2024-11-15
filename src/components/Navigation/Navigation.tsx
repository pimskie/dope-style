"use client";

import { Link } from "@/i18n/routing";

import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { UserContext } from "@/context/user.context";
import { signOutUser } from "@/utils/firebase/authentication";

import { useTranslations } from "next-intl";

import styles from "./Navigation.module.css";

const Navigation = () => {
  const pathname = usePathname();
  const { currentUser } = useContext(UserContext);
  const t = useTranslations("authentication");

  const onSignOutClicked = async () => {
    await signOutUser();
  };

  const links = [
    { label: "home", path: "/" },
    { label: "shop", path: "/shop" },
  ];

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
            <button onClick={onSignOutClicked}>{t("signOut")}</button>
          </div>
        ) : (
          <Link href="/sign-in" className="block px-2 py-3">
            {t("signIn")}
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
