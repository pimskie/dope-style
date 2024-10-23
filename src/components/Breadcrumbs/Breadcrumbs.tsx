"use client";

import React, { ReactNode } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { ucfirst } from "@/utils/string/ucfirst";

type Props = {
  homeElement: ReactNode;
  separator: ReactNode;
};

const Breadcrumbs = ({ homeElement, separator }: Props) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  const listClasses = "inline-block px-4 py-2";
  const activeClasses = "";

  return (
    <ul className="flex items-center">
      <li className={listClasses}>
        <Link href={"/"}>{homeElement}</Link>
      </li>

      {pathNames.length > 0 && separator}

      {pathNames.map((link, index) => {
        const href = `/${pathNames.slice(0, index + 1).join("/")}`;
        const itemClasses =
          paths === href ? `${listClasses} ${activeClasses}` : listClasses;
        const itemLink = ucfirst(link);

        return (
          <React.Fragment key={index}>
            <li>
              <Link className={itemClasses} href={href}>
                <span>{itemLink}</span>
              </Link>
            </li>
            {pathNames.length !== index + 1 && separator}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Breadcrumbs;
