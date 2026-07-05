import { useClientService } from "../clientService/useClientService";
import { useState } from "react";

export function useRegisterForm() {
  const { registerClient } = useClientService();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [cpf, setCpf] = useState<string>("");

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  function handlePhoneChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPhone(e.target.value);
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  function handleConfirmPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(e.target.value);
  }

  function handleCpfChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCpf(e.target.value);
  }

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    e.stopPropagation();

    if (password !== confirmPassword) return;

    const registerFormData = { name, email, password, phone, cpf };
    await registerClient(registerFormData);
  }

  return {
    name,
    email,
    password,
    confirmPassword,
    phone,
    cpf,
    handleNameChange,
    handleEmailChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handlePhoneChange,
    handleCpfChange,
    handleSubmit,
  };
}
