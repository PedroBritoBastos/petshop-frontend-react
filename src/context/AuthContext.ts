import { createContext } from "react";
import type { Client } from "../modules/client/types/Client";

type AuthContextProps = {
  isLogged: boolean;
  loggedClient: Client | null;
  login: () => void;
  loginAfterRegister: (registeredClient: Client) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
