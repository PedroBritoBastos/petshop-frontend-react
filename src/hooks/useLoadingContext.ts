import { useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";

export function useLoadingContext() {
  const value = useContext(LoadingContext);
  return { ...value };
}
