import type { AuthUser } from "@/types/AuthUser";

import { onAuthChanged } from "@/utils/firebase/authentication";
import { createContext, useEffect, useState } from "react";

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

  useEffect(() => {
    const onAuthChangedHandler = onAuthChanged(async (userResult) => {
      if (!userResult) {
        setCurrentUser(null);

        return;
      }

      // get or refresh token
      const accessToken = await userResult.getIdToken();

      const user: AuthUser = {
        accessToken,
        displayName: userResult.displayName,
        email: userResult.email!,
        providerId: userResult.providerId,
        uid: userResult.uid,
      };

      setCurrentUser(user);
    });

    return onAuthChangedHandler;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
