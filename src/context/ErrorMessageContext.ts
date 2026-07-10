import { createContext } from "react";

type ErrorMessageContextProps = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const ErrorMessageContext = createContext<ErrorMessageContextProps>({} as ErrorMessageContextProps);
