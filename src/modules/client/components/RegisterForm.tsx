import { Form } from "../../../components/ui/Form";

import { useRegisterForm } from "../hooks/registerForm/useRegisterForm";

export function RegisterForm() {
  const {
    handleNameChange,
    handleEmailChange,
    handleCpfChange,
    handlePasswordChange,
    handleConfirmPasswordChange,
    handleSubmit
  } = useRegisterForm();

  return (
    <Form.Root onSubmit={handleSubmit}>
      <Form.Legend legend="Cadastrar" />
      <Form.Link title="Já possui conta?" href="/login" linkTitle="Faça login." />
      <Form.Field id="name" label="Name" type="text" placeholder="Nome completo" onChange={handleNameChange} />
      <Form.Field id="email" label="Email" type="text" placeholder="example@email.com" onChange={handleEmailChange} />
      <Form.Field id="cpf" label="Cpf" type="text" placeholder="000-000-000-00" onChange={handleCpfChange} />
      <Form.Field id="password" label="Senha" type="password" placeholder="Crie sua senha" onChange={handlePasswordChange} />
      <Form.Field id="confirmPassword" label="Confirmar senha" type="password" placeholder="Confirme sua senha" onChange={handleConfirmPasswordChange} />
      <Form.Button type="submit">Cadastrar</Form.Button>
    </Form.Root>
  )
}