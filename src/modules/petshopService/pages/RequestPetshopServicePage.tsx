import { Form } from "../../../components/ui/Form"
import { useNavigate } from "react-router-dom"
import { useRequestPetshopServicePage } from "../hooks/useRequestPetshopServicePage";
import { useAuthContext } from "../../../hooks/useAuthContext";

export default function RequestPetshopServicePage() {
  const navigate = useNavigate();
  const requestPetshopServicePage = useRequestPetshopServicePage();
  const authContext = useAuthContext();

  if (!authContext.isLogged) {
    navigate("/")
  }

  return (
    <div className="bg-primary/10 min-h-screen">
      <nav className="w-full bg-white border-b border-border p-4">
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

      <div className="flex justify-center p-6 md:p-10">
        <div className="w-full max-w-2xl bg-white rounded-2xl border border-border shadow-sm">

          {/* Formulario */}
          <Form.Root onSubmit={requestPetshopServicePage.handleSubmit}>
            <div className="text-center md:text-start mb-3">
              <h1 className="text-3xl text-accent-foreground font-bold">Solicitar serviço</h1>

              <p className="text-lg text-card-foreground mt-2">
                Escolha o serviço desejado e o pet que será atendido.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-card-foreground"> Tipo de serviço </label>

              <select
                value={requestPetshopServicePage.service}
                onChange={requestPetshopServicePage.handleServiceChange}
                title="services"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Selecione um serviço</option>
                <option value="BANHO">Banho</option>
                <option value="TOSA">Tosa</option>
                <option value="VETERINARIA">Veterinária</option>
                <option value="FARMACIA">Farmácia</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-card-foreground"> Pet </label>

              <select
                value={requestPetshopServicePage.selectedPetId}
                onChange={requestPetshopServicePage.handlePetChange}
                title="pets"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Selecione um pet</option>
                {requestPetshopServicePage.clientAdoptedPets.map((clientAdoptedPet) => (
                  <option value={clientAdoptedPet.id} key={clientAdoptedPet.id}>{clientAdoptedPet.name}</option>
                ))}
              </select>
            </div>

            <Form.Field type="date" id="execution-date" label="Data de execução" value={requestPetshopServicePage.executionDate} onChange={requestPetshopServicePage.handleExecutionDateChange} />

            <Form.Button
              type="submit"
            >
              Confirmar solicitação
            </Form.Button>
          </Form.Root>
          {/* Formulario */}

        </div >
      </div >
    </div >

  )
}