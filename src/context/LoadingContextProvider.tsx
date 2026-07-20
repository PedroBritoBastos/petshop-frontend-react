import { LoadingContext } from "./LoadingContext"
import { useState } from "react"

export function LoadingContextProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);

  function startLoading(): void {
    setLoading(true);
  }

  function finishLoading(): void {
    setLoading(false);
  }

  return (
    <LoadingContext.Provider value={
      {
        loading,
        startLoading,
        finishLoading
      }}>
      {children}
    </LoadingContext.Provider>
  )
}