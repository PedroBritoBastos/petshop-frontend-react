import { useContext } from "react";
import { ErrorMessageContext } from "../context/ErrorMessageContext";

export function useErrorMessageContext() {
  const value = useContext(ErrorMessageContext);
  return { ...value };
}
