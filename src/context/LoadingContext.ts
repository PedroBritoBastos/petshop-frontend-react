import { createContext } from "react";

type LoadingContextProps = {
  loading: boolean;
};

export const LoadingContext = createContext<LoadingContextProps>({} as LoadingContextProps);
