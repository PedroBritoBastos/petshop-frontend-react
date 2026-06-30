import type { LoginFormData } from "../../modules/auth/types/LoginFormData";

const API = import.meta.env.VITE_API_URL;

export async function login(loginFormData: LoginFormData) {
  const response = await fetch(`${API}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginFormData),
  });

  const data = await response.json();
  return data;
}
