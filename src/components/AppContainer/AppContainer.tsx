"use client";

import { UserProvider } from "@/context/user.context";
import Navigation from "@/components/Navigation/Navigation";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";

const AppContainer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="app-container">
      <UserProvider>
        <Navigation />

        <div className="container">{children}</div>
      </UserProvider>
    </div>
  );
};

export default AppContainer;
