import { useState } from "react";

export function useRegisterPetForm() {
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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log({
      name,
      age,
      weight,
      photo: selectedPhoto,
    });
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
