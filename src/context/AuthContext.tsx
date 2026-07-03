import { createContext, useState } from "react";


type AuthContextProps = {
  isLogged: boolean;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [isLogged] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isLogged }}>
      {children}
    </AuthContext.Provider>
  )
}