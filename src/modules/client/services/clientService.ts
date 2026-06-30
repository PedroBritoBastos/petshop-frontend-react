const API = import.meta.env.VITE_API_URL;

export async function getClients() {
  const response = await fetch(`${API}/clients`);
  return response;
}
