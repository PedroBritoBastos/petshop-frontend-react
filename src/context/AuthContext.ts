import { createContext } from "react";

type AuthContextProps = {
  isLogged: boolean;
  login: () => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
