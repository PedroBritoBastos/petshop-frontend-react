const API = import.meta.env.VITE_API_URL;

export async function getAvailablePets() {
  const response = await fetch(`${API}/pets/available`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return (await response.json()).result;
}

export async function create(registerPetFormData: FormData) {
  // envia dados para a api
  const response = await fetch(`${API}/pets`, {
    method: "POST",
    credentials: "include",
    body: registerPetFormData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
}
