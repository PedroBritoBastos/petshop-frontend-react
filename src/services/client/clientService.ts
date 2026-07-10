import type { RegisterFormData } from "../../modules/client/types/RegisterFormData";
const API = import.meta.env.VITE_API_URL;

export async function register(registerFormData: RegisterFormData) {
  // envia dados para a api
  const response = await fetch(`${API}/clients`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerFormData),
  });

  if (!response.ok) {
    const error = await response.json();

    if (error.errors) {
      throw new Error(error.errors[0].msg);
    }

    throw new Error(error.message);
  }

  return await response.json();
}
