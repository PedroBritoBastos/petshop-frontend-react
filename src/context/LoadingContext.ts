import { createContext } from "react";

type LoadingContextProps = {
  loading: boolean;
  startLoading: () => void;
  fisnishLoading: () => void;
};

export const LoadingContext = createContext<LoadingContextProps>({} as LoadingContextProps);
