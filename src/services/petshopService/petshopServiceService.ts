const API = import.meta.env.VITE_API_URL;

export async function getPetshopServices() {
  const response = await fetch(`${API}/petshopServices`, { credentials: "include" });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return (await response.json()).result;
}
