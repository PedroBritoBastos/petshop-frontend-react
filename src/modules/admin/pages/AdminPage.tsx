import { Navbar } from "../components/Navbar/Navbar"
import { Dashboard } from "../components/Dashboard/Dashboard";
import { PetsView } from "../components/PetsView/PetsView";
import { ClientsView } from "../components/ClientsView/ClientsView";
import { ServicesView } from "../components/ServicesView/ServicesView";

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

      {/* Modo pets */}
      {activeOption === 'Pets' && (
        <PetsView />
      )}
      {/* Modo pets */}

      {/* Modo clients */}
      {activeOption === 'Clientes' && (
        <ClientsView />
      )}
      {/* Modo clients */}

      {/* Modo serviços */}
      {activeOption === 'Serviços' && (
        <ServicesView />
      )}
      {/* Modo serviços */}

    </div>
  )
}