import { useContext } from "react";
import { ViewModeContext } from "../contexts/ViewModeContext";

export function useViewModeContext() {
  const data = useContext(ViewModeContext);
  return { ...data };
}
