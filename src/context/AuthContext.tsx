import { createContext, useState } from "react";

type AuthContextProps = {
  isLogged: boolean;
  login: () => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [isLogged, setIsLogged] = useState<boolean>(false);

  /* faz login de usuário */
  async function login() {
    setIsLogged(true);
  }

  /* faz logout de usuário */
  async function logout() {
    setIsLogged(false);
  }

  return (
    <AuthContext.Provider value={{
      isLogged,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}