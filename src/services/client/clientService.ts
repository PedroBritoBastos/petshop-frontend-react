import type { RegisterFormData } from "../../modules/client/types/RegisterFormData";
const API = import.meta.env.VITE_API_URL;

export async function register(registerFormData: RegisterFormData) {
  // send data
  const response = await fetch(`${API}/clients`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerFormData),
  });

  // receiving api response
  const data = await response.json();
  return data;
}
