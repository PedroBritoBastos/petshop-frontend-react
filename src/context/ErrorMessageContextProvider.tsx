import { ErrorMessageContext } from "./ErrorMessageContext"
import { useState } from "react"

export function ErrorMessageContextProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <ErrorMessageContext.Provider value={
      {
        isOpen,
        open,
        close
      }}>
      {children}
    </ErrorMessageContext.Provider>
  )
}