const API = import.meta.env.VITE_API_URL;

export async function getAvailablePets() {
  const response = await fetch(`${API}/pets/available`);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return (await response.json()).result;
}

export async function getClientAdoptedPets(clientId: string) {
  const response = await fetch(`${API}/pets/adopted/${clientId}`, { credentials: "include" });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return (await response.json()).result;
}

export async function create(registerPetFormData: FormData) {
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

export async function getById(id: string) {
  const response = await fetch(`${API}/pets/${id}`, { credentials: "include" });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return (await response.json()).result;
}

export async function getPets() {
  const response = await fetch(`${API}/pets`, { credentials: "include" });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return (await response.json()).result;
}

export async function adopt(id: string) {
  const response = await fetch(`${API}/pets/adoption/${id}`, {
    method: "PUT",
    credentials: "include",
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return (await response.json()).message;
}
