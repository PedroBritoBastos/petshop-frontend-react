import type { LoginFormData } from "../../modules/auth/types/LoginFormData";

const API = import.meta.env.VITE_API_URL;

export async function login(loginFormData: LoginFormData) {
  // envia dados para a api
  const response = await fetch(`${API}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginFormData),
  });

  // lança erro caso tenha
  if (!response.ok) {
    const data = await response.json();
    throw new Error(data);
  }

  // retorna os dados
  const data = await response.json();
  return data;
}
