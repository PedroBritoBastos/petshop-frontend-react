import type { RequestPetshopServiceFormData } from "../../modules/petshopService/types/RequestPetshopService";

const API = import.meta.env.VITE_API_URL;

export async function getPetshopServices() {
  const response = await fetch(`${API}/petshopServices`, { credentials: "include" });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }

  return (await response.json()).result;
}

export async function request(requestPetshopServiceFormData: RequestPetshopServiceFormData) {
  // envia dados para a api
  const response = await fetch(`${API}/petshopServices`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestPetshopServiceFormData),
  });

  if (!response.ok) {
    const error = await response.json();

    if (error.errors) {
      throw new Error(error.errors.map((e: { msg: string }) => e.msg).join("\n"));
    }

    throw new Error(error.message);
  }

  await response.json();
}
