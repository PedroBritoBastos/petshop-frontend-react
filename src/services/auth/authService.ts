const API = import.meta.env.VITE_API_URL;

export async function login(formData: FormData) {
  const response = await fetch(`${API}/auth/login`, {
    method: "POST",
    credentials: "include",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Falha ao realizar login.");
  }

  return response.json();
}
