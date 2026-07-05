import { useState } from "react";
import { AuthContext } from "./AuthContext";
import type { Client } from "../modules/client/types/Client";

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [loggedClient, setLoggedClient] = useState<Client | null>(null);

  /* faz login de usuário */
  async function login() {
    setIsLogged(true);
  }

  /* faz login de usuario automaticamente após registrar-se */
  async function loginAfterRegister(registeredClient: Client) {
    setIsLogged(true);
    setLoggedClient(registeredClient);
  }

  /* faz logout de usuário */
  async function logout() {
    setIsLogged(false);
  }

  return (
    <AuthContext.Provider value={{
      isLogged,
      loggedClient,
      login,
      loginAfterRegister,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}