import { useState } from "react";
import { usePetService } from "../../../hooks/usePetService";
import { useNavigate } from "react-router-dom";

export function useRegisterPetForm() {
  const petService = usePetService();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleAgeChange(e: React.ChangeEvent<HTMLInputElement>) {
    setAge(e.target.value);
  }

  function handleWeightChange(e: React.ChangeEvent<HTMLInputElement>) {
    setWeight(e.target.value);
  }

  function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (!file) {
      setSelectedPhoto(null);
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("A foto deve ter no máximo 5MB.");
      e.target.value = "";
      return;
    }

    setSelectedPhoto(file);
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const registerPetFormData = new FormData();

    registerPetFormData.append("name", name);
    registerPetFormData.append("age", age);
    registerPetFormData.append("weight", weight);

    if (selectedPhoto) {
      registerPetFormData.append("petPhoto", selectedPhoto);
    }

    await petService.register(registerPetFormData);
    navigate("/");
  }

  return {
    name,
    age,
    weight,
    selectedPhoto,
    handleNameChange,
    handleAgeChange,
    handleWeightChange,
    handlePhotoChange,
    handleSubmit,
  };
}
