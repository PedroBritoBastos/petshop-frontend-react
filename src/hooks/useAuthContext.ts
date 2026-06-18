import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuthContext() {
  const value = useContext(AuthContext);
  return { ...value };
}
