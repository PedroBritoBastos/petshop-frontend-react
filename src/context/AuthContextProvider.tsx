import { useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [isLogged, setIsLogged] = useState<boolean>(true);

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