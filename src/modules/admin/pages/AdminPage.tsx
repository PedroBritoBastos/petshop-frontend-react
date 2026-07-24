import { Navbar } from "../components/Navbar/Navbar"
import { Dashboard } from "../components/Dashboard/Dashboard";
import { PetsView } from "../components/PetsView/PetsView";
import { ClientsView } from "../components/ClientsView/ClientsView";
import { ServicesView } from "../components/ServicesView/ServicesView";

import { useViewModeContext } from "../hooks/useViewModeContext"
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useAdminPage } from "../hooks/useAdminPage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function AdminPage() {
  const { activeOption } = useViewModeContext();
  const authContext = useAuthContext();
  const adminPage = useAdminPage();
  const navigate = useNavigate();

  // redireciona para login se não estiver logado
  useEffect(() => {
    if (!authContext.isLogged) {
      navigate("/login");
    }
  }, [])


  // impede o conteudo renderizar enquanto os dados carregam
  if (authContext.loading) {
    return null;
  }

  return (
    <div className="flex flex-col md:flex-row">
      <Navbar />

      {/* Modo painel */}
      {activeOption === 'Painel' && (
        <Dashboard
          data={{
            numberOfClients: adminPage.clients.length,
            numberOfPets: adminPage.pets.length,
            numberOfAdoptedPets: adminPage.adoptedPets.length
          }}
          adoptedPets={adminPage.adoptedPets}
          petshopServices={adminPage.petshopServices}
        />
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