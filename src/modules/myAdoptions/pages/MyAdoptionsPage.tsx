import type { PetshopService as PetshopServiceType } from "../../petshopService/types/PetshopService";

import { useMyAdoptionsPage } from "../hooks/useMyAdoptionsPage";
import { useNavigate } from "react-router-dom";

import { formatDate } from "../../../utils/dateFormatter";

import { PetshopService } from "../components/PetshopService";

export default function MyAdoptionsPage() {
  const myAdoptionsPage = useMyAdoptionsPage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-primary/10">
      <nav className="w-full bg-white border-b-1 border-border p-4 flex items-center justify-between">
        <div className="rounded-full bg-primary/10 text-foreground w-fit py-2 px-4 md:ml-20 xl:ml-40">
          {myAdoptionsPage.loggedClient?.email}
        </div>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-foreground hover:text-foreground/80 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-house-icon lucide-house"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path
              d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
            />
          </svg>
          Página inicial
        </button>
      </nav>


      <h1 className="text-xl text-foreground font-bold ml-5 md:ml-20 xl:ml-40 mt-5">Minhas adoções</h1>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:-grid-cols-4 gap-8 p-5 md:px-20 xl:px-40"
      >
        {myAdoptionsPage.clientAdoptedPets.length === 0 ? "Nenhuma adoção realizada." : ""}
      </div >

      <h1 className="text-xl text-foreground font-bold ml-5 mt-10 md:ml-20 xl:ml-40">
        Serviços solicitados
      </h1>
      <div className="grid grid-cols-1 gap-4 p-5 md:px-20 xl:px-40">
        {myAdoptionsPage.clientPetshopServices.length === 0 ? "Nenhum serviço solicitado." : myAdoptionsPage.clientPetshopServices.map((petshopService: PetshopServiceType) => (
          <PetshopService
            type={petshopService.type}
            petName={petshopService.petId}
            executionDate={formatDate(petshopService.executionDate)}
          />
        ))}
      </div>
    </div >

  )
}