import type { AuthUser } from "@/types/AuthUser";
import { createContext, useState } from "react";

type CurrentUser = AuthUser | null;

interface DefaultContext {
  currentUser: CurrentUser;
  setCurrentUser: (auth: CurrentUser) => void;
}

const defaultContext: DefaultContext = {
  currentUser: null,
  setCurrentUser: () => null,
};

const UserContext = createContext(defaultContext);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>(null);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
