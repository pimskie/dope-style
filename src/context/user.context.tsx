import { Authentication } from "@/types/Authentication";
import { createContext, useState } from "react";

interface DefaultContext {
  currentUser: Authentication | null;
  setCurrentUser: (auth: Authentication | null) => void;
}

const defaultContext: DefaultContext = {
  currentUser: null,
  setCurrentUser: () => null,
};

const UserContext = createContext(defaultContext);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<Authentication | null>(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
