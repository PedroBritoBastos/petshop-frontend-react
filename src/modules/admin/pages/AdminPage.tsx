import { Navbar } from "../components/Navbar/Navbar"
import { Dashboard } from "../components/Dashboard/Dashboard";

import { useViewModeContext } from "../hooks/useViewModeContext"

export default function AdminPage() {
  const { activeOption } = useViewModeContext();

  return (
    <div className="flex flex-col md:flex-row">
      <Navbar />

      {/* Modo painel */}
      {activeOption === 'Painel' && (
        <Dashboard />
      )}
      {/* Modo painel */}


    </div>
  )
}