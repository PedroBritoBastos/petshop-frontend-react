import { createContext } from "react";

type LoadingContextProps = {
  loading: boolean;
};

export const AuthContext = createContext<LoadingContextProps>({} as LoadingContextProps);
