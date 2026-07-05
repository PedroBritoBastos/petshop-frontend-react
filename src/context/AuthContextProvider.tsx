import { useState, useEffect } from "react";
import { useAuth } from "../modules/auth/hooks/useAuth";
import { AuthContext } from "./AuthContext";
import type { Client } from "../modules/client/types/Client";

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuth();

  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [loggedClient, setLoggedClient] = useState<Client | null>(null);

  useEffect(() => {
    async function verifyIfClientIsLogged() {
      const client = await auth.isClientLogged();
      setLoggedClient(client);
      setIsLogged(true);
    }
    verifyIfClientIsLogged();
  }, []);

  /* faz login de usuário */
  async function login(client: Client) {
    setIsLogged(true);
    setLoggedClient(client);
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
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}