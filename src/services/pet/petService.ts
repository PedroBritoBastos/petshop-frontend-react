const API = import.meta.env.VITE_API_URL;

export async function getAvailablePets() {
  const response = await fetch(`${API}/pets/available`);

  if (!response.ok) {
    throw new Error("Erro ao buscar pets disponíveis.");
  }

  return response.json();
}
