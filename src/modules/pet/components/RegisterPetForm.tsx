import { Form } from "../../../components/ui/Form";
import { ImagePreview } from "./ImagePreview";
import { NavigateToHomeButton } from "../../../components/ui/NavigateToHomeButton";
import { ErrorMessage } from "../../../components/ui/ErrorMessage";
import { useRegisterPetForm } from "../hooks/useRegisterPetForm";

export function RegisterPetForm() {
  const registerPetForm = useRegisterPetForm();

  return (
    <>
      <ErrorMessage message={registerPetForm.errorMessage} />
      <Form.Root onSubmit={registerPetForm.handleSubmit}>
        <div className="flex flex-col sm:flex-row-reverse sm:justify-between items-center gap-1 mb-4" >
          <NavigateToHomeButton />
          <h1 className="text-center text-2xl font-bold text-accent-foreground">Cadastre seu pet</h1>
        </div>


        {/* Inserir foto do pet */}
        <label
          htmlFor="upload-file"
          className="block text-sm font-medium text-accent-foreground"
        >
          Foto do pet
          <span className="text-xs ml-2">Tamanho máximo: 5MB</span>
        </label>

        <ImagePreview file={registerPetForm.selectedPhoto} />

        <input
          id="upload-file"
          type="file"
          accept=".png,.jpg,.jpeg"
          className="hidden"
          onChange={registerPetForm.handlePhotoChange}
        />

        <label
          htmlFor="upload-file"
          className="w-full border-2 border-dashed rounded-xl p-6 bg-white hover:bg-primary/5 transition cursor-pointer flex justify-center"
        >
          <div className="flex flex-col items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-ring"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>

            <span className="font-medium text-accent-foreground">
              Selecionar foto
            </span>

            <span className="text-sm text-muted-foreground">
              PNG ou JPG
            </span>

            {registerPetForm.selectedPhoto && (
              <span className="text-sm font-medium text-ring">
                {registerPetForm.selectedPhoto.name}
              </span>
            )}
          </div>
        </label>

        <Form.Field
          id="name"
          type="text"
          placeholder="Nome do pet"
          label="Nome do pet"
          value={registerPetForm.name}
          onChange={registerPetForm.handleNameChange}
        />

        <Form.Field
          id="age"
          type="number"
          placeholder="0"
          label="Idade do pet"
          value={registerPetForm.age}
          onChange={registerPetForm.handleAgeChange}
        />

        <Form.Field
          id="weight"
          type="number"
          placeholder="0kg"
          label="Peso"
          value={registerPetForm.weight}
          onChange={registerPetForm.handleWeightChange}
        />

        <Form.Button type="submit">Cadastrar</Form.Button>
      </Form.Root>
    </>

  );
}