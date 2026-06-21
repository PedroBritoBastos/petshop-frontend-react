import { createContext, useState } from "react";

type ViewModeContextProps = {
  activeOption: string;
  changeActiveOption: (optionName: string) => void;
}

export const ViewModeContext = createContext<ViewModeContextProps>({} as ViewModeContextProps);

export function ViewModeContextProvider({ children }: { children: React.ReactNode }) {

  const [activeOption, setActiveOption] = useState<string>('Painel');

  function changeActiveOption(optionName: string): void {
    setActiveOption(optionName);
  }

  return (
    <ViewModeContext.Provider value={{ activeOption, changeActiveOption }}>
      {children}
    </ViewModeContext.Provider>
  )
}