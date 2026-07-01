import { Form } from "../../../components/ui/Form";

import { useRegisterForm } from "../hooks/registerForm/useRegisterForm";

export function RegisterForm() {
  const {
    handleNameChange,
    handleSubmit
  } = useRegisterForm();

  return (
    <Form.Root onSubmit={handleSubmit}>
      <Form.Legend legend="Cadastrar" />
      <Form.Link title="Já possui conta?" href="/login" linkTitle="Faça login." />
      <Form.Field id="name" label="Nome" type="text" placeholder="Ex: Eduardo da Silva" onChange={handleNameChange} />
      {/*       <Form.Field id="email" label="Email" type="text" placeholder="example@email.com" />
      <Form.Field id="password" label="Senha" type="password" placeholder="Crie sua senha" />
      <Form.Field id="confirmPassword" label="Confirmar senha" type="password" placeholder="Confirme sua senha" /> */}
      <Form.Button type="submit">Cadastrar</Form.Button>
    </Form.Root>
  )
}