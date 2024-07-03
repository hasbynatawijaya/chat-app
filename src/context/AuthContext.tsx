import { FC, ReactNode, createContext, useContext, useState } from "react";

import { User } from "../types";

interface AuthState {
  authUser: User | null;
  setAuthUser: (user: User | null) => void;
}

interface AuthProvider {
  children: ReactNode;
}

export const AuthContext = createContext<AuthState>({
  authUser: null,
  setAuthUser: () => {},
});

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthContextProvider: FC<AuthProvider> = ({ children }) => {
  const [authUser, setAuthUser] = useState<User | null>(
    JSON.parse(localStorage.getItem("chat-user") as string) || null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
