import { useState, useEffect } from "react";
import { useAuth } from "../modules/auth/hooks/useAuth";
import { AuthContext } from "./AuthContext";
import type { Client } from "../modules/client/types/Client";

export function AuthContextProvider({ children }: { children: React.ReactNode }) {
  const auth = useAuth();

  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [loggedClient, setLoggedClient] = useState<Client | null>(null);

  /* 
  * Verifica se existe cliente logado a cada re-renderização.
  * Se existir, deve logar automaticamente e colocar os dados do cliente logado no estado global
  */
  useEffect(() => {
    async function verifyIfClientIsLogged() {
      const client = await auth.isClientLogged();
      if (client !== undefined) {
        setLoggedClient(client);
        setIsLogged(true);
      }
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
    setLoggedClient(null);
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