import { useMyAdoptionsPage } from "../hooks/useMyAdoptionsPage";
import { formatDate } from "../../../utils/dateFormatter";
import { PetshopService } from "../components/PetshopService";
import { NavigateToHomeButton } from "../../../components/ui/NavigateToHomeButton";

export default function MyAdoptionsPage() {
  const myAdoptionsPage = useMyAdoptionsPage();

  return (
    <div className="min-h-screen bg-primary/10">
      <nav className="w-full bg-white border-b-1 border-border p-4 flex items-center justify-between">
        <div className="rounded-full bg-primary/10 text-foreground w-fit py-2 px-4 md:ml-20 xl:ml-40">
          {myAdoptionsPage.loggedClient?.email}
        </div>
        <NavigateToHomeButton />
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
        {myAdoptionsPage.clientPetshopServices.length === 0 ? "Nenhum serviço solicitado." : myAdoptionsPage.clientPetshopServices.map((petshopService) => (
          <PetshopService
            key={petshopService.id}
            type={petshopService.type}
            petName={petshopService.petName}
            executionDate={formatDate(petshopService.executionDate)}
          />
        ))}
      </div>
    </div >
  )
}