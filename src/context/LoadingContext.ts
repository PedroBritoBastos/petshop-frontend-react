import { createContext } from "react";

type LoadingContextProps = {
  loading: boolean;
  startLoading: () => void;
  finishLoading: () => void;
};

export const LoadingContext = createContext<LoadingContextProps>({} as LoadingContextProps);
