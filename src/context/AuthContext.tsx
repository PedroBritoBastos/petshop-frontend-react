import { createContext, useState } from "react";

type AuthContextProps = {
  isAuthenticated: boolean;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}