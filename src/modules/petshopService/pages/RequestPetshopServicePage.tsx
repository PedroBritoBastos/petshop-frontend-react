import { Form } from "../../../components/ui/Form"
import { NavigateToHomeButton } from "../../../components/ui/NavigateToHomeButton";
import { ErrorMessage } from "../../../components/ui/ErrorMessage";
import { useRequestPetshopServicePage } from "../hooks/useRequestPetshopServicePage";

export default function RequestPetshopServicePage() {
  const requestPetshopServicePage = useRequestPetshopServicePage();

  return (
    <div className="bg-primary/10 min-h-screen">
      <ErrorMessage message={requestPetshopServicePage.error} />

      <nav className="w-full bg-white border-b border-border p-4 px-8 md:px-20 xl:px-40 flex items-center justify-between">
        <div className="rounded-full bg-primary/10 text-foreground w-fit py-2 px-4">
          {requestPetshopServicePage.loggedClientEmail}
        </div>
        <NavigateToHomeButton />
      </nav>

      <div className="flex justify-center p-6 md:p-10">
        <div className="w-full max-w-2xl bg-white rounded-2xl border border-border shadow-sm">
          {requestPetshopServicePage.loading ? (
            <p>Carregando...</p>
          ) : (
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
          )}
        </div >
      </div >
    </div >

  )
}

