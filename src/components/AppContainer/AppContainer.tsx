"use client";

import { UserProvider } from "@/context/user.context";
import Navigation from "@/components/Navigation/Navigation";

const AppContainer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="app-container">
      <UserProvider>
        <Navigation />

        {children}
      </UserProvider>
    </div>
  );
};

export default AppContainer;
