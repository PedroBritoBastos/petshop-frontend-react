import { Navbar } from "../../../components/Navbar";
//import { AvailableAdoptionCard } from "../components/AvailableAdoptionCard";
import { PetshopServiceCard } from "../components/PetshopServiceCard";

import { useEffect } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import { useAuthContext } from "../../../hooks/useAuthContext";

export default function ClientPage() {
  const auth = useAuth();

  useEffect(() => {
    async function loadClient() {
      await auth.isClientLogged();
    }
    loadClient();
  }, [])

  return (
    <div className="w-full">
      <Navbar />

      {/* Hero */}
      <main className="bg-muted flex flex-col md:flex-row md:p-10">
        <div className="md:flex-1 p-15 md:p-10 md:py-30">
          <h1 className="text-5xl text-accent-foreground font-bold leading-tight max-w-100">
            Encontre o seu <span className="text-primary">Amigo Animal</span>
          </h1>
          <p className="text-xl text-card-foreground my-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolorem a eligendi quis,
            autem hic distinctio aut! Ipsum, provident tempore animi expedita ad, praesentium iure
            minima eos, illo veniam eligendi?
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              className="bg-ring hover:bg-secondary text-lg text-primary-foreground font-semibold rounded-xl px-8 py-4 block w-fit"
            >Ver adoções</a
            >
            <a
              className="bg-ring hover:bg-secondary text-lg text-primary-foreground font-semibold rounded-xl px-8 py-4 block w-fit"
            >Nossos serviços</a
            >
          </div>
        </div>
        <div
          className="hidden md:block bg-green-100 md:flex-1 bg-cover relative rounded-lg shadow-lg objetc-[]"
          style={{ backgroundImage: "url('assets/client-page-hero-image.jpg')" }}
        >
          <div className="absolute inset-0 bg-muted/20"></div>
        </div>
      </main>
      {/* Hero */}

      {/* Adoptions section */}
      <section className="px-4 py-25">
        <h1 className="text-center text-primary text-md font-semibold">CONHEÇA NOSSOS AMIGOS</h1>
        <p className="text-center text-accent-foreground text-4xl font-bold">Pets em adoção</p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-10 lg:px-10 xl:px-15"
        >
          {/*           {availablePets.map((availablePet: any) => (
            <AvailableAdoptionCard
              key={availablePet.petId}
              name={availablePet.name}
              age={availablePet.age}
              imageUrl={availablePet.imageUrl}
            />
          ))} */}
        </div>
      </section >
      {/* Adoptions section */}

      {/* Petshop services section */}
      <section className="bg-muted px-15 py-20">
        <h1 className="text-center text-primary text-md font-semibold">O QUE OFERECEMOS</h1>
        <p className="text-center text-accent-foreground text-4xl font-bold">Nossos serviços</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-10">
          <PetshopServiceCard
            petshopService="Banho"
            description="Banhos oferecidos com os melhores produtos e cuidados"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shower-head-icon lucide-shower-head"
            >
              <path d="m4 4 2.5 2.5" />
              <path d="M13.5 6.5a4.95 4.95 0 0 0-7 7" />
              <path d="M15 5 5 15" />
              <path d="M14 17v.01" />
              <path d="M10 16v.01" />
              <path d="M13 13v.01" />
              <path d="M16 10v.01" />
              <path d="M11 20v.01" />
              <path d="M17 14v.01" />
              <path d="M20 11v.01" />
            </svg>
          </PetshopServiceCard>
          <PetshopServiceCard
            petshopService="Tosa"
            description="Tosa profissional para deixar o seu pet com a melhor aparência possível"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-scissors-icon lucide-scissors"
            >
              <circle cx="6" cy="6" r="3" />
              <path d="M8.12 8.12 12 12" />
              <path d="M20 4 8.12 15.88" />
              <circle cx="6" cy="18" r="3" />
              <path d="M14.8 14.8 20 20" />
            </svg>
          </PetshopServiceCard>
          <PetshopServiceCard
            petshopService="Consulta"
            description="Consulta médica especializada para cuidar da saúde do seu pet"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-ambulance-icon lucide-ambulance"
            >
              <path d="M10 10H6" />
              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
              <path
                d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"
              />
              <path d="M8 8v4" />
              <path d="M9 18h6" />
              <circle cx="17" cy="18" r="2" />
              <circle cx="7" cy="18" r="2" />
            </svg>
          </PetshopServiceCard>
          <PetshopServiceCard
            petshopService="Farmácia"
            description="Aqui se encontram medicamentos para todos os tipos de enfermidades"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-pill-icon lucide-pill"
            >
              <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
              <path d="m8.5 8.5 7 7" />
            </svg>
          </PetshopServiceCard>
        </div>
      </section>
      {/* Petshop services section */}
    </div >
  )
}