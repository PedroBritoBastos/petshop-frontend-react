import { Navbar } from "../components/Navbar/Navbar"
import { Dashboard } from "../components/Dashboard/Dashboard";
import { PetsView } from "../components/PetsView/PetsView";
import { ClientsView } from "../components/ClientsView/ClientsView";
import { ServicesView } from "../components/ServicesView/ServicesView";

import { useViewModeContext } from "../hooks/useViewModeContext"
import { useAdminPage } from "../hooks/useAdminPage";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const { activeOption } = useViewModeContext();
  const adminPage = useAdminPage();
  const authContext = useAuthContext();
  const navigate = useNavigate();

  if (!authContext.isLogged) {
    navigate("/");
  }

  if (authContext.loading) {
    return null;
  }

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